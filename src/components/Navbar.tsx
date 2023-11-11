import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { CiLogin } from "react-icons/ci";
import { IconContext } from "react-icons";
import kwoc_logo from "../assets/kwoc_logo.png";
import { ROUTER_PATHS } from "../util/constants";
// import { useAuthContext } from "../util/auth";

const LINKS = [
  { name: "HOME", link: ROUTER_PATHS.HOME },
  // { name: "PROJECTS", link: ROUTER_PATHS.PROJECTS_LIST },
  // { name: "TESTIMONIALS", link: ROUTER_PATHS.TESTIMONIALS },
  { name: "FAQs", link: ROUTER_PATHS.FAQ },
];

function BrandLogo() {
  return (
    <Link to={"/"}>
      <img
        className="object-contain cursor-pointer h-12 w-12"
        src={kwoc_logo}
        alt="KWoC Logo"
      />
    </Link>
  );
}

function LinksList(isLinkActive: (link: string) => boolean, isMobile: boolean) {
  return LINKS.map((link) => (
    <li key={link.name} className={isMobile ? "mb-1" : "md:ml-4 md:mr-4"}>
      <Link
        to={link.link}
        className={
          (isMobile
            ? "block p-2 text-sm font-semibold "
            : "px-2 py-1 font-semibold ") +
          (isLinkActive(link.link)
            ? "text-blue-500 hover:drop-shadow-glow duration-500"
            : "text-white opacity-80 hover:drop-shadow-glow duration-500 active:text-blue-700")
        }
      >
        {link.name}
      </Link>
    </li>
  ));
}

function LoginButton({ isMobile }: { isMobile: boolean }) {
  // const authContext = useAuthContext();
  console.log(isMobile);

  return <></>;
  // return (
  //   // <Link
  //   //   to={
  //   //     authContext.isAuthenticated
  //   //       ? authContext.isRegistered
  //   //         ? authContext.dashboardLink
  //   //         : authContext.formLink
  //   //       : GH_OAUTH_URL
  //   //   }
  //   //   className={isMobile ? "flex justify-end pr-2 pt-2" : ""}
  //   // >
  //   //   {authContext.isAuthenticated && authContext.isRegistered ? (
  //   //     <CgProfile color="#dc2626" />
  //   //   ) : (
  //   //     <CiLogin color="#dc2626" />
  //   //   )}
  //   // </Link>
  // );
}

function Navbar() {
  const location = useLocation();
  const isLinkActive = (path: string) => location.pathname === path;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="fixed inset-x-0 z-50 w-full">
      <nav
        className={`flex shadow-md mt-4 items-center justify-between max-w-7xl gap-4 mx-auto border border-[#FFFFFF]/[0.16] px-4 py-2 rounded-lg w-[95%] inset-x-0 backdrop-blur-md z-50 ${
          mobileMenuOpen ? "hidden" : ""
        }`}
      >
        <BrandLogo />
        <div className="lg:hidden ml-auto -mr-5">
          <button
            className="flex items-center text-blue-600 p-3"
            onClick={toggleMobileMenu}
          >
            <CiMenuBurger size="2em" color="#3b82f6" />
          </button>
        </div>

        <div className={`${mobileMenuOpen ? "hidden" : null}`}>
          <ul
            className={`lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            {LinksList(isLinkActive, false)}

            <IconContext.Provider value={{ size: "2.3em" }}>
              <LoginButton isMobile={false} />
            </IconContext.Provider>
          </ul>
        </div>
      </nav>

      {mobileMenuOpen && (
        <MobileNavbar
          toggleMobileMenu={toggleMobileMenu}
          isLinkActive={isLinkActive}
        />
      )}
    </div>
  );
}

function MobileNavbar({
  toggleMobileMenu,
  isLinkActive,
}: {
  toggleMobileMenu: () => void;
  isLinkActive: (link: string) => boolean;
}) {
  return (
    <div className="w-full z-50 h-screen transition-transform transform ease-in-out duration-500 translate-x-0 p-2 flex justify-end">
      <div className="navbar-backdrop fixed bg-gray-800 opacity-25"></div>
      <nav className="h-full flex flex-col w-5/6 max-w-sm py-5 px-5 border border-[#FFFFFF]/[0.16] rounded-lg backdrop-blur-md overflow-y-auto">
        <div className="flex-items-center flex flex-row mb-8 mx-2">
          <span className="mr-auto">
            <BrandLogo />
          </span>

          <button onClick={toggleMobileMenu}>
            <RiCloseLine size="2.5em" color="#3b82f6" />
          </button>
        </div>

        <div>
          <ul className="mr-4 text-right">
            {LinksList(isLinkActive, true)}
            <IconContext.Provider value={{ size: "2.5em" }}>
              <LoginButton isMobile={true} />
            </IconContext.Provider>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
