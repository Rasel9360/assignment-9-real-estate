import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
const Root = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;