"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Multi-Agent Travel RAG System",
    description: [
      "Engineered a multi-agent LLM-based RAG system using LangGraph for end-to-end travel assistance.",
      "Designed stateful routing and memory checkpointing, improving response accuracy by 30%.",
      "Integrated LangSmith observability for tracing agent reasoning and performance.",
    ],
    tech: ["Python", "LangChain", "LangGraph", "Qdrant", "SQLite", "Docker"],
    image: "/images/projects/travel-rag.jpg",
    gitUrl: "https://github.com/Saumyaladdha/multi-agent-travel-rag",
  },
  {
    id: 2,
    title: "Neural Music Generation System",
    description: [
      "Built deep learning pipelines using LSTM, GRU, and GANs for symbolic music generation.",
      "Processed MIDI datasets using Music21 and Magenta for sequence modeling.",
      "Optimized GAN training achieving 35% faster convergence and richer musical diversity.",
    ],
    tech: ["Python", "TensorFlow", "LSTM", "GRU", "GANs", "Music21"],
    image: "/images/projects/music-lstm.jpg",
    gitUrl:
      "https://github.com/Saumyaladdha/Deep-music-generation-using-LSTM-GRU-GANs",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12"
      >
        Featured AI Projects
      </motion.h2>

      <motion.ul
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto"
      >
        {projectsData.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group w-full"
          >
            <ProjectCard
              title={project.title}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            >
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                {project.description.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">• {point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full
                    bg-violet-600/20 text-violet-300
                    border border-violet-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ProjectCard>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;
