import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text[2rem]">
              Do you want to make beautiful products
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] ">
                <i class="ri-mail-line"></i>Hire Me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300  leading-7 mt-4 sm:mt-0  ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              impedit amet voluptas nulla ipsa adipisci nisi tempore expedita
              iusto officia, animi consectetur sapiente porro. Iste rem vitae
              molestias exercitationem ex.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10 ">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a target="_blank" href="https://github.com/solman500" className="text-gray-300 font-[500] text-[18px ] ">
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a target="_blank" href="https://www.linkedin.com/in/ahmed-soliman-2564a01ba/" className="text-gray-300 font-[500] text-[18px ] ">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a target="_blank" href="https://www.facebook.com/sOoLManN/" className="text-gray-300 font-[500] text-[18px ] ">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="" target="_blank" className="text-gray-300 font-[500] text-[18px ] ">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* <div className="">
            <ul className="flex items-center justify-center gap-[20px] me-5 ms-3 mt-10">
              <li>
                <a
                  className="text-gray-400 font-[600] hover:text-blue-700"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 font-[600] hover:text-blue-700"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="text-gray-400 font-[600] hover:text-blue-700">
                <a href="#">Services</a>
              </li>
              <li>
                <a
                  className="text-gray-400 font-[600] hover:text-blue-700"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 font-[600] hover:text-blue-700"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
      </div>

      {/* <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center jsutify-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-[500] text-[15px]">
                All Right Reserved
              </span>
              <span className="text-gray-400 font-[500] text-[15px]">|</span>
              <span className="text-gray-400 font-[500] text-[15px]">
                Designed By
              </span>
              <span className="text-gray-400 font-[500] text-[15px]">|</span>
              <span className="text-gray-400 font-[500] text-[15px]">
                Ahmed Soliman
              </span>
            </div>
            
          </div>
        </div>
      </div> */}


      <div>
        <p className="text-center text-gray-400 font-[500] text-[14px] mt-10">
          &copy; 2024 All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
