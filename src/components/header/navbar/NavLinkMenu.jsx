import ManuList from "../../shared/ManuList";

const NavLinkMenu = () => {
    return (
        <>
            <div className="flex-none hidden lg:block ">
                <ul className="menu menu-horizontal flex dark:text-gray-400 text-black">
                    {/* Navbar menu content here */}
                    <ManuList address={'/'} linkTitle={"Home"}  />
                    <ManuList address={'all-courses'} linkTitle={"All Courses"}  />
                    <ManuList address={'blog'} linkTitle={"Blog"}  />
                    <ManuList address={'contact'} linkTitle={"Contact"} />
                    <ManuList address={'notices'} linkTitle={"Notices"} />
                </ul>
            </div>
        </>
    );
};

export default NavLinkMenu;