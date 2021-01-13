import React, { useState, useEffect } from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const addBodyStyle = () => {
      if (isOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    addBodyStyle();
  }, [isOpen]);

  return (
    <nav className="text-white wrapper bg-midGreen">
      <div className="flex items-center justify-between md:justify-start md:space-x-10">
        <div className="md:w-1/5">
          <Link href="/">
            <a className="">
              <img src="/logo.svg" alt="logo" />
            </a>
          </Link>
        </div>

        <div className="items-center justify-between hidden md:w-4/5 md:flex">
          <ul className="flex items-center space-x-10">
            <li>
              <Link href="/">
                <a className="text-xl font-semibold hover:text-lightCoral">
                  home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-xl font-semibold hover:text-lightCoral">
                  about
                </a>
              </Link>
            </li>
          </ul>

          <div className="">
            <Link href="/contact">
              <a className="btn">contact us</a>
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="p-0 bg-transparent focus:outline-none"
            onClick={toggleMenu}
          >
            <img src="/assets/icon-hamburger.svg" alt="menu" />
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-75">
            {/* menu start */}
            <Slide right>
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-28">
                <div className="relative w-screen">
                  <img
                    src="/assets/bg-pattern-about-1-mobile-nav-1.svg"
                    alt="pattern"
                    className="absolute bottom-0 -right-28"
                  />
                  <div className="flex flex-col h-full py-6 bg-polBlue">
                    <div className="relative flex-1 px-4 mt-6 sm:px-6">
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full space-y-10" aria-hidden="true">
                          <div className="flex justify-end">
                            <button
                              className="p-0 bg-transparent focus:outline-none"
                              onClick={toggleMenu}
                            >
                              <img src="/assets/icon-close.svg" alt="menu" />
                            </button>
                          </div>

                          <div className="space-y-10 px-7">
                            <ul className="space-y-5">
                              <li>
                                <Link href="/">
                                  <a
                                    className="text-xl font-semibold"
                                    onClick={toggleMenu}
                                  >
                                    home
                                  </a>
                                </Link>
                              </li>

                              <li>
                                <Link href="/about">
                                  <a
                                    className="text-xl font-semibold "
                                    onClick={toggleMenu}
                                  >
                                    about
                                  </a>
                                </Link>
                              </li>
                            </ul>

                            <div className="flex justify-center">
                              <Link href="/contact">
                                <a className="btn" onClick={toggleMenu}>
                                  contact us
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>

            {/* menu end */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
