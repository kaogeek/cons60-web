import Logo from "./Logo";
import HamburgerSVG from "./HamburgerSVG";
import CloseBtnSVG from "./CloseBtnSVG";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";


function Navbar({ setSearchInputValue }) {
  const [showMenu, setShowMenu] = React.useState(false);
  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    // Automatically focus the search input when on the search page
    if (location.pathname === "/search") {
      searchInputRef.current?.focus();
      // print out search input value
      console.log(searchInputRef.current?.value);
    }
  }, [location.pathname]); // Dependency array to re-run effect when pathname changes

  return (
    <div className="h-16 bg-[#310]" style={{backgroundImage: "linear-gradient(#410808, #820f0f)"}} data-testid="navbar">
      <div className="max-w-screen-xl h-full mx-auto px-4 flex justify-between items-center">
        {location.pathname === "/search" && (
          <div className="inline-block">
            <Link to="/" className="text-2xl font-bold text-white sm:hidden">
              <Icon icon="ic:round-arrow-back-ios" />
            </Link>
            <Link
              to="/"
              className="text-2xl font-bold text-white hidden sm:block"
            >
              <Logo />
            </Link>
          </div>
        )}

        {location.pathname === "/search" && (
          <div className="sm:w-3/5 w-4/5  inline-block text-sm ">
            {/* Replace this with your actual search bar component */}

            <div className="text-2xl text-black px-6 bg-white flex content-center py-1 items-center rounded-full">
              <Icon icon="bx:bx-search-alt-2" className="text-black" />
              <div className="px-2"></div>
              <input
                type="text"
                id="search-input"
                name="search-input"
                className="focus:outline-none w-full"
                ref={searchInputRef}
                onChange={(e) => setSearchInputValue(e.target.value)}
              ></input>
            </div>
          </div>
        )}

        {location.pathname === "/search" && (
          <div className="inline-block"></div>
        )}

        {location.pathname !== "/search" && (
          <div className="inline-block">
            <Link to="/" className="text-2xl font-bold text-white">
              <Logo />
            </Link>
          </div>
        )}

        {/* Desktop Menu */}
        {location.pathname !== "/search" && (
          <div className="t">
            <div className="hidden xs:flex gap-8">
              <Link
                to="/"
                className="text-white hover:underline underline-offset-4"
              >
                หน้าหลัก
              </Link>
              <Link
                to="/search"
                className="text-white hover:underline underline-offset-4"
              >
                ค้นหา
              </Link>
              <Link
                to="/about"
                className="text-white hover:underline underline-offset-4"
              >
                เกี่ยวกับโครงการ
              </Link>
              <Link
                to="/related-info"
                className="text-white hover:underline underline-offset-4"
              >
                ข้อมูลที่เกี่ยวข้อง
              </Link>
            </div>
            {/* Mobile Menu */}
            <div className="xs:hidden flex items-center">
              {/* Hamburger menu icon for mobile */}
              {!showMenu ? (
                <button
                  onClick={() => setShowMenu(true)}
                  className="text-white focus:outline-none focus:text-white"
                >
                  <HamburgerSVG />
                </button>
              ) : (
                <button
                  onClick={() => setShowMenu(false)}
                  className="text-white focus:outline-none focus:text-white"
                >
                  <CloseBtnSVG />
                </button>
              )}

              {showMenu && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-[#310]">
                  {/* Mobile menu items */}
                  <div className="flex flex-col gap-2 mx-4 mb-4">
                    <div className="w-auto inline-block">
                      <Link
                        to="/"
                        className="text-white hover:underline underline-offset-4"
                      >
                        หน้าหลัก
                      </Link>
                    </div>
                    <div className="w-auto inline-block">
                      <Link
                        to="/search"
                        className="text-white hover:underline underline-offset-4"
                      >
                        ค้นหา
                      </Link>
                    </div>
                    <div className="w-auto inline-block">
                      <Link
                        to="/about"
                        className="text-white hover:underline underline-offset-4"
                      >
                        เกี่ยวกับโครงการ
                      </Link>
                    </div>
                    <div className="w-auto inline-block">
                      <Link
                        to="/related-info"
                        className="text-white hover:underline underline-offset-4"
                      >
                        ข้อมูลที่เกี่ยวข้อง
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
