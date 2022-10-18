import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="footer-row">
          <div className="contact-info">
            <h3>
              Contact
              <br />
              information —
            </h3>
            <p>
              Feel free to reach out to me any time. I don't mind speaking over
              any media outlet, although we might be a few time zones away.
            </p>
            <ul>
              <li>
                Email:
                <a className="special" href="mailto:roimalka10@gmail.com">
                  roimalka10@gmail.com
                </a>
              </li>
              <li>
                Phone: <span>+972-50-868-2525</span>
              </li>
            </ul>
          </div>
          <div className="latest-projects"></div>
          <div className="availability"></div>
          <div className="follow"></div>
          <div className="copyright"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
