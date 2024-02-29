/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import ManuList from "../../shared/ManuList";

const NavLinkMenu = ({isScrolled}) => {

    // eslint-disable-next-line no-unused-vars
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <div className="flex-none hidden lg:block ">
                <ul className={`menu menu-horizontal flex  text-white p__cormorant   ${isScrolled?"text-white":""}`}>
                    {/* Navbar menu content here */}
                    <ManuList address={'/'} linkTitle={t("navHome.home")}  />
                    <ManuList address={'all-courses'} linkTitle={t("navAllCourse.all-course")}  />
                    <ManuList address={'blog'} linkTitle={t("navBlog.blog")}  />
                    <ManuList address={'contact'} linkTitle={t("navContact.contact")} />
                    <ManuList address={'services'} linkTitle={t("Services")} />
                </ul>
            </div>
        </>
    );
};

export default NavLinkMenu;