import React, { useRef, useEffect } from "react";

function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex  items-center"
    >
      <div className="container">
        <div className="flex  items-center  justify-between">
          {/*logo start*/}
          <div className="flex items-center gap-[10px]">
            <span className=" bg-primaryColor  w-[35px] h-[35px]  text-white  text-[18px] font-[500] rounded-full  flex  items-center justify-center">
              A
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[600]">ahmed</h2>
              <p className="text-smallTextColor text-[12px] font-[500]">
                Fronted Developer
              </p>
            </div>
          </div>
          {/*logo ended*/}

          {/*menu start*/}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] hover:text-blue-700"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600] hover:text-blue-700"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="text-smallTextColor font-[600] hover:text-blue-700">
                <a onClick={handleClick} href="#service">
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:text-blue-700"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:text-blue-700"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/*menu ended*/}
          {/* menu right */}
          <div className="flex items-center gap-4 m-2">
            <button className="flex items-center  text-smallTextColor font-[600] border border-solid  border-smallTextColor py-2 px-4 rounded-[8px] max-h-[30px] hover:bg-smallTextColor hover:text-white  hover:font-[500]  ease-in duration-300 ">
              <a
                href="https://wa.me/01146223301"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="">
                  <i className="ri-send-plane-line "></i>
                  <span className="ml-2">WhatsApp</span>
                </div>
                
              </a>
            </button>

            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor  crusor-pointer md:hidden "
            >
              <i class="ri-menu-line "></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
