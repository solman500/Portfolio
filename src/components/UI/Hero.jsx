import React from "react";
import heroImg from "../../assets/images/ahmeds.png";
import CountUp from "react-countup";
function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="test-headingColor font-[600] text-[16px]"
            >
              hello,welcome
            </h5>
            <h2
              data-aos="fade-up"
              data-aos-duration="1500"
              className="test-headingColor font-[500] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading -[46px] mt-2"
            >
              <span className="font-[600]">My name is</span>{" "}
              <span className="font-[300]">Ahmed soliman </span> <br />{" "}
              <span className="font-[600]"> Frontend Developer .</span>.<br />
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="mailto:ahmedsolliman28@gmail.com" target="_blank">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i>
                  Hire.Me
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1ksUf4FKt2PaQ4G3GpfFQ5HsAFAszOVPq/view?usp=sharing"
                download="AhmedSOnextReactJS.pdf"
                target="_blank"
                className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
              >
                <i className="ri-download-2-line"></i>
                Resume
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              "Frontend Developer (Next.js, React.js, React Native) – Summary
              Results-driven Frontend Developer with expertise in Next.js,
              React.js, and React Native, specializing in building scalable,
              high-performance web and mobile applications. Skilled in
              server-side rendering (SSR), client-side rendering (CSR), and API
              integration, ensuring seamless user experiences across platforms.
              Proficient in modern UI/UX design, state management (Redux,
              Zustand), and performance optimization, reducing load times and
              improving efficiency. Passionate about developing cross-platform
              solutions with React Native, delivering responsive and engaging
              applications. Adept at collaborating with teams to implement best
              practices, testing strategies, and accessibility standards for
              robust digital experiences."
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow Me:
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.facebook.com/sOoLManN/"
                  className="text-smallTextColor text-[15px] font-[600] "
                >
                  <i class="ri-facebook-fill"></i>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ahmed-soliman-2564a01ba/"
                  className="text-smallTextColor text-[15px] font-[600] "
                >
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://github.com/solman500"
                  className="text-smallTextColor text-[15px] font-[600] "
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.instagram.com/a.soliiman/"
                  className="text-smallTextColor text-[15px] font-[600] "
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justfiy-center">
              <img src={heroImg} alt="hero" className="w-full" />
            </figure>
          </div>
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[500] text-[18px]">
                years of Experience
              </h4>
            </div>
            <div className="mb-5">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={85} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[500] text-[18px]">
                Succes Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[500] text-[18px]">
                Projects Completed
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={50} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[500] text-[18px]">
                Tasks
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
