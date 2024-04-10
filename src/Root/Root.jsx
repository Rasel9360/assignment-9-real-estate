import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
const Root = () => {
    return (
        <div >
            <div className="h-[68px]"><Navbar></Navbar></div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;