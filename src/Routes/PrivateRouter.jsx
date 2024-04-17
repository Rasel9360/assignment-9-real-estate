import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    if(loading){
        return  <div className="flex justify-center items-center mt-28"><span className="loading loading-bars loading-lg text-[#696CFF]"></span></div>
    }

    if(user){
        return  children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRouter;