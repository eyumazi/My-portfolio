/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";
import "./About.scss";

const About = () => {
  const infoItems = [
    { icon: <FaUserTie />, label: "Name", value: "John Doe" },
    { icon: <FaEnvelope />, label: "Email", value: "john.doe@example.com" },
    { icon: <FaMapMarkerAlt />, label: "From", value: "San Francisco, CA" },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/johndoe",
      isLink: true,
    },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span>Me</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get to know me better
        </motion.p>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Doe"
              className="profile-image"
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="about-heading">Who am I?</h3>
            <p className="about-description">
              I'm a passionate Full Stack Developer with 5+ years of experience
              building web applications. I specialize in JavaScript technologies
              across the whole stack (React.js, Node.js, Express, MongoDB). I
              love solving complex problems and creating efficient, scalable,
              and user-friendly solutions.
            </p>

            <div className="about-info">
              {infoItems.map((item, index) => (
                <div key={index} className="info-item">
                  <span className="info-icon">{item.icon}</span>
                  <span className="info-label">{item.label}:</span>
                  {item.isLink ? (
                    <a
                      href={`https://${item.value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-value"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="info-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="about-buttons">
              <a href="#" className="btn btn-primary">
                <FaDownload className="btn-icon" />
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                Hire Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
