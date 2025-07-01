/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and problem-solving skills are remarkable.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO at StartupX",
      content:
        "Working with John was a pleasure. He transformed our mobile app with his React Native expertise, delivering ahead of schedule.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer at DesignHub",
      content:
        "John's backend architecture for our SaaS product was robust and scalable. He's a true professional who communicates clearly.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="section testimonials">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client <span>Testimonials</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What people I've worked with say about me
        </motion.p>

        <motion.div
          className="testimonials-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
