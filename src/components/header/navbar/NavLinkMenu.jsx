import useUserRole from "../../../Hooks/useUserRole";
import ManuList from "../../shared/ManuList";

const NavLinkMenu = () => {
const [role,isLoading] = useUserRole();
      const currentRole = role[0]?.role;
      console.log(currentRole);
    if(isLoading){
        return <><h1 className="text-xl text-center my-7">Loading......</h1></> 
    }
    return (
        <>
            <div className="flex-none hidden lg:block ">
                <ul className="menu menu-horizontal flex dark:text-gray-400 text-black">
                    {/* Navbar menu content here */}
                    <ManuList address={'/'} linkTitle={"Home"}  />
                    <ManuList address={'all-courses'} linkTitle={"All Courses"}  />
                    <ManuList address={'blog'} linkTitle={"Blog"}  />
                    <ManuList address={'contact'} linkTitle={"Contact"} />
                    {/* {
                        currentRole  &&
                    } */}
                    {/* student  */}
                    {/* {
                        currentRole === 'student' &&  <ManuList address={'notices'} linkTitle={"Notices"} />
                    } */}
                 
                  <ManuList address={'user-notices'} linkTitle={"User Notices"} />
                </ul>
            </div>
        </>
    );
};

export default NavLinkMenu;