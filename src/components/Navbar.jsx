import React from "react";
import Logo from "./Logo";
import HamburgerSVG from "./HamburgerSVG";
import CloseBtnSVG from "./CloseBtnSVG";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="h-16 bg-black" data-testid="navbar">
      <div className="max-w-screen-xl h-full mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <Logo />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden xs:flex gap-8">
          <Link
            to="/"
            className="text-white hover:underline underline-offset-4"
          >
            ภาพรวม
          </Link>
          <Link
            to="/about"
            className="text-white hover:underline underline-offset-4"
          >
            เกี่ยวกับโครงการ
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
            <div className="md:hidden absolute top-16 left-0 right-0 bg-black">
              {/* Mobile menu items */}
              <div className="flex flex-col gap-2 mx-4 mb-4">
                <div className="w-auto inline-block">
                  <Link
                    to="/"
                    className="text-white hover:underline underline-offset-4"
                  >
                    ภาพรวม
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
