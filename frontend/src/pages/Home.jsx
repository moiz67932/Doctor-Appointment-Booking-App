import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../utils/motion";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* HERO CONTENT */}

            <motion.div>
              <motion.div className="lg:w-[570px]">
                <motion.h1
                  className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]"
                  variants={fadeIn("up", "tween", 0.1, 1, 7)}
                >
                  We help patients live a healthy, longer life.
                </motion.h1>
                <motion.p
                  className="text_para"
                  variants={fadeIn("right", "tween", 0.2, 1, 0)}
                >
                  Medicare provides state-of-the-art care with hands-on service
                  and transparent pricing, all from an award-winning space in
                  the heart of San Francisco.
                </motion.p>

                <PopupButton
                  url="https://calendly.com/moiz67932/2-hour-appointment"
                  rootElement={document.getElementById("root")}
                  text={
                    <motion.button
                      className="btn"
                      variants={fadeIn("up", "tween", 0.2, 1, 10)}
                    >
                      Request An Appointment
                    </motion.button>
                  }
                />
              </motion.div>

              {/* hero counter */}

              <motion.div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <motion.div variants={zoomIn(0.1, 1)}>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>{" "}
                  <motion.p className="text_para">Years of Experience</motion.p>{" "}
                </motion.div>
                <motion.div variants={zoomIn(0.3, 1)}>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>{" "}
                  <motion.p className="text_para">Clinic Location</motion.p>
                </motion.div>
                <motion.div variants={zoomIn(0.6, 1)}>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>{" "}
                  <motion.p className="text_para">
                    Patient Satisfaction
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* HERO CONTENT */}

            <motion.div className="flex gap-[30px] justify-end">
              <motion.div variants={fadeIn("up", "tween", 0.2, 1, 5)}>
                <img className="w-full" src={heroImg01} alt="" />
              </motion.div>
              <motion.div
                className="mt-[30px]"
                variants={fadeIn("up", "tween", 0.2, 1, 5)}
              >
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* HERO SECTION END */}

      <section>
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="lg:w-[470px] mx-auto">
            <motion.div variants={fadeIn("up", "tween", 0.2, 1, 5)}>
              <h2 className="heading text-center">
                Providing the best medical services
              </h2>
            </motion.div>
            <motion.div variants={fadeIn("up", "tween", 0.3, 1, 5)}>
              <motion.p className="text_para text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <motion.div className="py-[30px] px-5 " variants={zoomIn(0.4, 1)}>
              <motion.div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </motion.div>
              <motion.div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Our Team
                </h2>
                <motion.p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </motion.p>
                <Link
                  to="/team"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div className="py-[30px] px-5 " variants={zoomIn(0.9, 1)}>
              <motion.div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </motion.div>
              <motion.div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book An Appointment
                </h2>
                <motion.p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                  {" "}
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </motion.p>
                <Link
                  to="#"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <PopupButton
                    url="https://calendly.com/moiz67932/2-hour-appointment"
                    rootElement={document.getElementById("root")}
                    text={
                      <BsArrowRight className="group-hover:text-white w-6 h-5" />
                    }
                  />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div className="py-[30px] px-5 " variants={zoomIn(1.4, 1)}>
              <motion.div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </motion.div>
              <motion.div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find Our Location
                </h2>
                <motion.p className="text-[16px] leading-7 text-textColor font-[400] text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </motion.p>
                <Link
                  to="#"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <About />

      {/* SERVICE SECTION */}

      <section>
        <motion.div className="container">
          <motion.div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <motion.p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </motion.p>
          </motion.div>
          <ServiceList />
        </motion.div>
      </section>

      {/* SERVICE SECTION END */}

      {/* FEATURE SECTION */}

      <section>
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="flex items-center justify-between flex-col lg:flex-row">
            {/* FEATURE CONTENT */}

            <motion.div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br />
                anytime.
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text_para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text_para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <PopupButton
                url="https://calendly.com/moiz67932/2-hour-appointment"
                rootElement={document.getElementById("root")}
                text={
                  <Link to="/">
                    <motion.button
                      className="btn"
                      variants={fadeIn("up", "tween", 0.75, 1, 20)}
                    >
                      Book Now
                    </motion.button>
                  </Link>
                }
              />
            </motion.div>

            {/* FEATURE IMG */}
            <motion.div
              className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0"
              variants={fadeIn("left", "tween", 0.2, 1, 5)}
            >
              <img src={featureImg} className="w-3/4" alt="" />
              <motion.div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <motion.div className="flex items-center justify-between">
                  <motion.div className="flex items-center gap-[6px] lg:gap-3">
                    <motion.p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600] ">
                      Tue, 24
                    </motion.p>
                    <motion.p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00
                    </motion.p>
                  </motion.div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </motion.div>

                <motion.div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </motion.div>
                <motion.div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURE SECTION END */}

      {/* OUR GREAT DOCTORS */}

      <section>
        <motion.div className="container">
          <motion.div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <motion.p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </motion.p>
          </motion.div>

          <DoctorList />
        </motion.div>
      </section>

      {/* OUR GREAT DOCTORS END */}

      {/* FAQ ITEM LIST */}

      <section>
        <motion.div
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="flex justify-between gap-[50px] lg:gap-0">
            <motion.div
              className="w-1/2 hidden md:block"
              variants={fadeIn("up", "tween", 0.4, 1, 5)}
            >
              <img src={faqImg} alt="" />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2"
              variants={fadeIn("right", "tween", 0.4, 1, 5)}
            >
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ ITEM LIST END */}

      {/* TESTIMONIALS */}
      <section>
        <motion.div className="container">
          <motion.div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <motion.p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </motion.p>
          </motion.div>
          <Testimonial />
        </motion.div>
      </section>
      {/* TESTIMONIALS END */}
    </>
  );
};

export default Home;
