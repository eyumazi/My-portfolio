/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./TestimonialCard.scss";

const TestimonialCard = ({ testimonial }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={index < testimonial.rating ? "star filled" : "star"}
      />
    ));
  };

  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="testimonial-content">
        <FaQuoteLeft className="quote-icon" />
        <p className="testimonial-text">{testimonial.content}</p>
      </div>
      <div className="testimonial-footer">
        <div className="testimonial-rating">{renderStars()}</div>
        <div className="testimonial-author">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="author-avatar"
          />
          <div className="author-info">
            <h4 className="author-name">{testimonial.name}</h4>
            <p className="author-role">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
