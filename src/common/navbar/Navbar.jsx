import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);



  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
      if (!target.closest("#dropdownNavbar")) setDropdownVisible(false);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const toggleMenu = () => {
    setState(!state);
  };

  const handleNavLinkClick = () => {
    scrollToTop();
    setState(false);
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <nav
      className={`navbar md:text-sm ${scrolled ? "scrolled" : ""} ${state
        ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
        : ""
        }`}
      style={{ backgroundColor: `${state ? "#fff" : ""}` }}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-1 md:block">
          <a href="javascript:void(0)">
            <img className="h-14 w-auto" src={logo} alt="Logo" />
          </a>
          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={toggleMenu}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? "block" : "hidden"
          }  sm:flex-col lg:flex-row`}>

          <ul className="flex flex-col md:flex md:flex-row justify-center items-center space-y-6 md:space-x-6 md:space-y-0">
            <Link to="/" className="button_navbar text-gray-600 hover:text-gray-800 rounded-md px-3 pt-1 text-md font-medium" onClick={handleNavLinkClick}>Home</Link>
            <Link to="/remotejobs" className="button_navbar text-gray-600 hover:text-gray-800 rounded-md px-3 pt-1 text-md font-medium" onClick={handleNavLinkClick}>Remote Jobs</Link>
            <Link to="/outsourcing" className="button_navbar text-gray-600 hover:text-gray-800 rounded-md px-3 pt-1 text-md font-medium" onClick={handleNavLinkClick}>Business Outsourcing</Link>
            <Link to="/elearning" className="button_navbar text-gray-600 hover:text-gray-800 rounded-md px-3 pt-1 text-md font-medium" onClick={handleNavLinkClick}>E-Learning</Link>
            <Link to="/aboutus" className="button_navbar text-gray-600 hover:text-gray-800 rounded-md px-3 pt-1 text-md font-medium" onClick={handleNavLinkClick}>About Us</Link>
          </ul>


          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <Link to="/login" className="block text-gray-600 text-lg font-medium text-center">Log in</Link>
            <Link to="/signup" className="block py-2.5 px-5 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav >
  )
}
export default Navbar
