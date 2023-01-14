import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { BounceLoader } from "react-spinners";
import AnimateLeft from "./Animate/AnimateLeft";
import "../css/About.css";
import UseLoading from "../Reusables/UseLoading";
import emailjs from "@emailjs/browser";

const About = () => {
  const form = useRef();
  const [loading] = UseLoading();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Massage, setMassage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMassage("");

    emailjs
      .sendForm(
        "service_cz0funu",
        "template_ohceoko",
        form.current,
        "c-25Ng17awyf5yYj1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your email has been sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {loading ? (
        <motion.div
          className="about-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.2,
          }}
        >
          <div className="bounce-icon">
            <BounceLoader color="#bfbfbf" />
          </div>
          <div className="loader-text">
            <motion.h5
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              About Me
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              Front-End Developer
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <AnimateLeft>
          <>
            <section className="about-text">
              <div className="wrapper">
                <motion.h5
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.7,
                  }}
                >
                  a few words about me
                </motion.h5>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1,
                  }}
                >
                  I’m Roi Malka, a Front-End Developer who focuses on showing my
                  skills visually, through enjoyable and meaningful experiences.
                  I specialize in responsive websites and extraordinary
                  animations.
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.3,
                  }}
                >
                  Over the past 2 years I have been trying to hone my skills,
                  creating websites using beautiful animations, transitions and
                  proper UX&UI approach for clients and myself. In my spare time
                  I enjoy football and reading.
                </motion.h3>
              </div>
            </section>
            <motion.section
              className="about-skills"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 1.6,
              }}
            >
              <div className="wrapper">
                <div className="soft-skills">
                  <h5>Skills</h5>
                  <h3>
                    UX&UI<em> / </em>
                    Animations<em> / </em>
                    Infinite Curiousity<em> / </em>
                    Attention To Details<em> / </em>
                    Pixel Perfect Precision
                  </h3>
                </div>
                <div className="technologies">
                  <h5>Technologies</h5>
                  <h3>
                    HTML<em> / </em>
                    CSS<em> / </em>
                    JavaScript<em> / </em>
                    React<em> / </em>
                    jQuery<em> / </em>
                    Git<em> / </em>
                    GSAP<em> / </em>
                    Framer Motion<em> / </em>
                    Redux<em> / </em>
                    Sass
                  </h3>
                </div>
              </div>
            </motion.section>
            <motion.section
              className="contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <div className="wrapper">
                <div className="contact-headline">
                  <div>
                    <h5>Contact</h5>
                    <h2>Get in touch - let's work together.</h2>
                  </div>
                </div>
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="input-wrapper">
                        <label>Name</label>
                        <input
                          placeholder="What’s your name?"
                          type="text"
                          name="name"
                          required
                          onChange={(event) => setName(event.target.value)}
                          value={Name}
                        />
                        <span class="input-bottom-line"></span>
                      </div>
                      <div className="input-wrapper">
                        <label>Email</label>
                        <input
                          placeholder="What’s your email?"
                          type="email"
                          name="user_email"
                          required
                          onChange={(event) => setEmail(event.target.value)}
                          value={Email}
                        />
                        <span class="input-bottom-line"></span>
                      </div>
                    </div>
                    <div className="row textarea-row">
                      <div className="input-wrapper">
                        <label>Message</label>
                        <textarea
                          placeholder="What’s your message?"
                          name="message"
                          required
                          onChange={(event) => setMassage(event.target.value)}
                          value={Massage}
                        />
                        <span class="input-bottom-line"></span>
                      </div>
                    </div>
                    <div className="submit-button">
                      <input type="submit" value="Send message" />
                    </div>
                  </form>
                </div>
              </div>
            </motion.section>
          </>
        </AnimateLeft>
      )}
    </>
  );
};

export default About;
