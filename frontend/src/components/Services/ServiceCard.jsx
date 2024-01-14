/* eslint-disable react/prop-types*/
import React from "react";
import { PopupButton } from "react-calendly";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { staggerContainer, zoomIn } from "../../utils/motion";
import { motion } from "framer-motion";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  return (
    <motion.div
      className="container"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        className="py-[30px] px-3 lg:px-5"
        variants={zoomIn(`${index / 3}`, 1)}
      >
        <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
          {name}
        </h2>
        <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
          {desc}
        </p>
        <motion.div className="flex flex-row items-center justify-between mt-[40px]">
          <PopupButton
            url="https://calendly.com/moiz67932/2-hour-appointment"
            rootElement={document.getElementById("root")}
            text={
              <Link
                to="#"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            }
          />
          <span
            className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
            style={{
              background: `${bgColor}`,
              color: `${textColor}`,
              borderRadius: "6px 0 0 6px",
            }}
          >
            {index + 1}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default ServiceCard;
