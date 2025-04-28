import React from "react";
import frontend from "../../assets/images/front-end.png";
import backend from "../../assets/images/backend.png";

import uiImg from "../../assets/images/design.png";
import appsImage from "../../assets/images/apps.png";
function Service() {
  return (
    <section id="service">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2
            className="=text-headingColor font-[800] text-[2.4rem] mb-5
                "
          >
            What Do i Help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 ">
            "Coding isn't just a profession; it's my canvas for innovation. As a
            frontend developer, I blend creativity with technical acumen to
            build seamless, visually captivating websites. My proficiency spans
            HTML, CSS, and JavaScript, enabling me to craft intuitive interfaces
            that merge functionality with aesthetics. I'm driven to continually
            refine my skills, embracing new technologies and design trends to
            deliver impactful digital solutions."
          </p>
        </div>
        
        <div className="flex flex-col justify-center sm:py-12 ">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* ////////////////////////////Vertical line///////////////////// */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/* ////////////////////left-card//////////////////////////////////////// */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto  items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in-duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                          "Mastering ReactJS, Angular, Next.js, and Tailwind
                          CSS, I weave intricate frontend solutions, leveraging
                          React's modularity, Angular's framework robustness,
                          and Next.js's performance. With Tailwind CSS, I sculpt
                          elegant designs, ensuring responsive, performant, and
                          visually captivating web applications that resonate
                          seamlessly across platforms."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4  w-10  h-10 absolute  left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0  flex items-center justify-center">
                    <figure>
                      <img src={frontend} alt="frontend" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ////////////////////right-card//////////////////////////////////////// */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto  items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in-duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                        Proficient in harnessing the power of Node.js, MongoDB, Firebase, and SQL, I engineer resilient backend infrastructures that fuel dynamic, scalable applications. Leveraging Node.js for its event-driven architecture, coupled with MongoDB's flexibility and Firebase's real-time capabilities, I architect data-driven solutions ensuring optimal performance, security, and seamless functionality."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4  w-10  h-10 absolute  left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0  flex items-center justify-center">
                    <figure>
                      <img src={backend} alt="frontend" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto  items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in-duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Cross PlatForm
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                        "Skilled in crafting versatile mobile experiences, adeptly leveraging React Native and Flutter to create efficient cross-platform applications, ensuring streamlined development and robust performance."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4  w-10  h-10 absolute  left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0  flex items-center justify-center">
                    <figure>
                      <img src={appsImage} alt="frontend" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ////////////////////right-card//////////////////////////////////////// */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto  items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in-duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Web Design (UI/UX)
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                        "As a frontend developer, I prioritize creating seamless and user-friendly interfaces.
I use Figma to design intuitive layouts that enhance user interaction and visual appeal.
My goal is to deliver responsive, accessible, and engaging web experiences across all devices."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4  w-10  h-10 absolute  left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0  flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="frontend" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
