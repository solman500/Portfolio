import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  return (
    <div   className="fixed w-full h-full  top-0 left-0  z-10   bg-headingColor bg-opacity-40  " onClick={handleClose}>
      <div className="w-11/12 md:w-full my-8 md:max-w-[600px]  absolute top-1/2 left-1/2 z-20 rounded-[8px]  transform -translate-x-1/2 -translate-y-1/2  bg-gray-200  p-5 ">
        {/* Image Section */}
        <figure >
          <img
            className=" rounded-[8px]"
            src={portfolio.imgUrl}
            alt="Portfolio"
          />
        </figure>

        {/* Content Section */}
        <div >
          <h2 className="text-2xl font-[700] text-headingColor my-2 line-clamp-1">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-7 text-smallTextColor">
            {portfolio.description}
          </p>

          {/* Technologies */}
          <div className="mt-2 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700] ">
              Technologies:
            </h4>  
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-300  px-2 rounded-[5px] text-[14px] leading-0 text-smallTextColor"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Live Site Button */}
          <a target="_blank"  href={portfolio.siteUrl}>
            <button className="bg-primaryColor text-white py-2 px-4 my-2 rounded-[8px] font-[500] hover:bg-headingColor transition duration-300">
              Live Site
            </button>
          </a>
        </div>  

        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="w-8 h-8 absolute top-3 right-3 text-2xl bg-primaryColor flex items-center justify-center rounded-md cursor-pointer hover:text-white hover:bg-red-600 transition"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
