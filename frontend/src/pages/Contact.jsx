import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Contact = () => {
  return (
    <section>
      <motion.div
        className="px-4 mx-auto max-w-screen-md "
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="heading text-center">Contact Us</h2>
        <motion.p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </motion.p>
        <form action="#" className="space-y-8">
          <motion.div variants={fadeIn("up", "tween", 0.2, 1, 5)}>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1"
            />
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 0.5, 1, 5)}>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form_input mt-1"
            />
          </motion.div>
          <motion.div
            className="sm:col-span-2"
            variants={fadeIn("up", "tween", 0.8, 1, 5)}
          >
            <label htmlFor="message" className="form_label">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="Leave a comment...."
              className="form_input mt-1"
            />
          </motion.div>
          <button className="btn rounded-full sm:w-fit">Submit</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
