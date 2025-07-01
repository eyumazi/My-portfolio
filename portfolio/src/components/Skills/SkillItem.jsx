/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./SkillItem.scss";

const SkillItem = ({ skillCategory }) => {
  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="skill-header">
        <div className="skill-icon">{skillCategory.icon}</div>
        <h3 className="skill-title">{skillCategory.category}</h3>
      </div>
      <div className="skill-list">
        {skillCategory.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillItem;
