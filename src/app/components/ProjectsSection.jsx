"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Text-Summarization Project",
    description: "Utilizes Pegasus, Transformer architectures, and Hugging Face's Dailymail/CNN model for effective text summarization, aiming for concise and clear information retrieval.",
    image: "/images/projects/1.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Saumyaladdha/Text-Summarizer-Project",
  },
  {
    id: 2,
    title: "Web-based Restaurant Management System",
    description: "Transforms online ordering with a user-friendly platform using XAMPP, PHP, HTML, CSS, and MySQL, simplifying the food ordering process.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saumyaladdha/silver_spoon",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Builds a dynamic e-commerce platform using the MERN stack, focusing on transaction security and user experience through intuitive interfaces and efficient catalog management.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saumyaladdha/Ecommerce",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Features a secure, user-centric design using Next.js, Tailwind CSS, and Resend API, effectively showcasing professional capabilities and achievements.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saumyaladdha/Portfolio",
  },
  {
    id: 5,
    title: "E-Commerce Shipping Prediction",
    description: "Revolutionizes logistics with data analytics using Random Forest and Gradient Boosting algorithms, enhancing delivery efficiency and customer satisfaction.",
    image: "/images/projects/5.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Saumyaladdha/Ecommerce_pred",
  },
  {
    id: 6,
    title: "Virtual Assistant",
    description: "Empowers visually impaired individuals with AI-driven features like face recognition and text-to-speech, improving accessibility and social engagement.",
    image: "/images/projects/6.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Saumyaladdha/VirtualAssistant",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
      
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
