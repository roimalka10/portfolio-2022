import React from "react";
import "../css/ContactButton.css";
import { motion } from "framer-motion";

const ContactButton = () => {
  return (
    <>
      <motion.a
        href="https://chatwith.io/s/roi-malka"
        target="_blank"
        className="contact-link"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 1.7,
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          enable-background="new 0 0 20 20"
          space="preserve"
        >
          <path
            fill="#ffffff"
            d="M16,17H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3H16a2,2,0,0,1,2,2V15A2,2,0,0,1,16,17Zm0-2V7.619l-6,4.242L4,7.619V15H16ZM4,5V5.705l6,3.429,6-3.429V5H4Z"
          ></path>
        </svg>
        <span>Contact me</span>
      </motion.a>
    </>
  );
};

export default ContactButton;
