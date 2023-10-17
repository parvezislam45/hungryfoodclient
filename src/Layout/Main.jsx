import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shered/Navbar";
import Footer from "../Shered/Footer";


const Main = () => {
    const location = useLocation()
    const noData = location.pathname.includes('login')
    return (
        <div>
            {noData || <Navbar/>}
           <Outlet></Outlet> 
           {noData || <Footer/>}
        </div>
    );
};

export default Main;