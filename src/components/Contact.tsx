import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <p className="contact-cta-line">
          Let's talk about data, ML, or the next product you want to ship.
        </p>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:mustafamehdi42@gmail.com" data-cursor="disable">
                mustafamehdi42@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+923132925009" data-cursor="disable">
                +92-313-2925009
              </a>
            </p>
            <h4>Location</h4>
            <p>Karachi, Pakistan {/* open to remote & relocation: [confirm] */}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Mustafa-Mehdi-Abbas"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-mehdi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="/resume.pdf"
              download="Mustafa-Mehdi-CV.pdf"
              data-cursor="disable"
              className="contact-social"
            >
              Download Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Mustafa Mehdi
              <br />
              <span>Data &amp; AI Engineer</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
