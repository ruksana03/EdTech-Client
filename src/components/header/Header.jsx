import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navber";

const Header = () => {
    return (
        <div>
            <Navbar>
                <Outlet></Outlet>
            </Navbar>
        </div>
    );
};

export default Header;