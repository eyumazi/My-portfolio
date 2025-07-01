/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";
import SkillItem from "./SkillItem";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <FaLaptopCode />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "TailwindCSS", level: 88 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      category: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "Python/Django", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      category: "Database & Others",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span>Skills</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I've worked with a variety of technologies in the web development
          world. Here are some of my core competencies.
        </motion.p>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills.map((skillCategory, index) => (
            <SkillItem key={index} skillCategory={skillCategory} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
