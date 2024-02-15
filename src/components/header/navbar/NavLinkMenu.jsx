/* eslint-disable react/prop-types */
import ManuList from "../../shared/ManuList";

const NavLinkMenu = ({isScrolled}) => {
    return (
        <>
            <div className="flex-none hidden lg:block ">
                <ul className={`menu menu-horizontal flex  text-white p__cormorant   ${isScrolled?"text-white":""}`}>
                    {/* Navbar menu content here */}
                    <ManuList address={'/'} linkTitle={"Home"}  />
                    <ManuList address={'all-courses'} linkTitle={"All Courses"}  />
                    <ManuList address={'blog'} linkTitle={"Blog"}  />
                    <ManuList address={'contact'} linkTitle={"Contact"} />
                    <ManuList address={'quest'} linkTitle={"Quizes"} />
                    
                </ul>
            </div>
        </>
    );
};

export default NavLinkMenu;