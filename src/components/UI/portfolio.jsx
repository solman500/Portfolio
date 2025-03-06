import React, { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

function Portfolio() {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTap, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModelHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    console.log("Select Tap:", selectTap);

    if (selectTap === "all") {
      setPortfolios(data);
    }
    if (selectTap === "web-design") {
      const filteredData = data.filter(
        (item) => item.category === "Web Design"
      );
      setPortfolios(filteredData);
    }
    if (selectTap === "mobile-app") {
      const filteredData = data.filter(
        (item) => item.category === "Mobile App"
      );
      setPortfolios(filteredData);
    }
  }, [selectTap]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap m-5">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor font-[700] text-[2rem]">
              My Recent Project
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              className="text-smallTextColor border p-1 px-3 border-solid border-smallTextColor   rounded-[8px]"
              onClick={() => setSelectTab("all")}
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className="text-smallTextColor border p-1 border-solid border-smallTextColor  rounded-[8px]"
            >
              Wep Design
            </button>
            <button
              onClick={() => setSelectTab("mobile-app")}
              className="text-smallTextColor border p-1 border-solid border-smallTextColor  rounded-[8px]"
            >
              Mobile App
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2] relative z-[1]"
              key={index}
            >
              <figure>
                <img
                  className="rounded-[8px]"
                  src={portfolio.imgUrl}
                  alt="port"
                />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-5 left-0 z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModelHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 "
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className=" text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 "
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
}

export default Portfolio;
