/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const dummyProjects = [
      {
        id: 1,
        title: "E-commerce Dashboard",
        description:
          "A comprehensive admin dashboard for e-commerce businesses with analytics and inventory management.",
        tags: ["React", "Node.js", "MongoDB"],
        category: "web",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        githubUrl: "#",
        demoUrl: "#",
        lastUpdated: "2 weeks ago",
      },
      {
        id: 2,
        title: "Fitness Tracker App",
        description:
          "Mobile application for tracking workouts, nutrition, and progress with social features.",
        tags: ["React Native", "Firebase", "Redux"],
        category: "mobile",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        githubUrl: "#",
        demoUrl: "#",
        lastUpdated: "1 month ago",
      },
      {
        id: 3,
        title: "RESTful API Service",
        description:
          "A scalable backend service with authentication, rate limiting, and comprehensive documentation.",
        tags: ["Node.js", "Express", "MongoDB", "JWT"],
        category: "api",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        githubUrl: "#",
        demoUrl: "#",
        lastUpdated: "3 weeks ago",
      },
      {
        id: 4,
        title: "Task Management System",
        description:
          "A collaborative task management tool with real-time updates and team features.",
        tags: ["React", "TypeScript", "Node.js", "Socket.io"],
        category: "web",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        githubUrl: "#",
        demoUrl: "#",
        lastUpdated: "2 months ago",
      },
      {
        id: 5,
        title: "Weather Forecast App",
        description:
          "Mobile application providing detailed weather forecasts with interactive maps.",
        tags: ["Flutter", "Dart", "API"],
        category: "mobile",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        githubUrl: "#",
        demoUrl: "#",
        lastUpdated: "1 week ago",
      },
      {
        id: 6,
        title: "Authentication Microservice",
        description:
          "A standalone authentication service with OAuth, JWT, and social login integration.",
        tags: ["Go", "gRPC", "PostgreSQL", "Redis"],
        category: "api",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        githubUrl: "#",
        demoUrl: "#",
        lastUpdated: "5 days ago",
      },
    ];

    setProjects(dummyProjects);
    setFilteredProjects(dummyProjects);
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter, projects]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span>Projects</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of my recent projects from GitHub. Click on any project
          to view more details.
        </motion.p>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
            onClick={() => handleFilterChange("web")}
          >
            Web Apps
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "mobile" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("mobile")}
          >
            Mobile Apps
          </button>
          <button
            className={`filter-btn ${activeFilter === "api" ? "active" : ""}`}
            onClick={() => handleFilterChange("api")}
          >
            APIs
          </button>
        </motion.div>

        <motion.div
          className="project-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          className="more-projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub className="btn-icon" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
