/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-logo">
            <a href="#" className="logo">
              DEV<span>PORTFOLIO</span>
            </a>
            <p className="copyright">© {year} John Doe. All rights reserved.</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            Made with <FaHeart className="heart-icon" /> by John Doe
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
