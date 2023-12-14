"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Text-Summarization Project",
    description: "This project focuses on improving text summarization techniques by employing advanced technologies such as Pegasus, Transformer-based architectures, and leveraging Hugging Face's pre-trained model (Dailymail/CNN). The dynamic summarization pipeline, incorporating tokenization, stemming, and advanced embeddings, aims to enhance the clarity and effectiveness of summarizations. The ultimate goal is to provide a powerful tool for easy information retrieval, delivering succinct and clear summaries that reflect an improved understanding of nuanced language.",
    image: "/images/projects/1.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Saumyaladdha/Text-Summarizer-Project",
  },
  {
    id: 2,
    title: "Web-based Restaurant Management System",
    description: "This project focuses on transforming the online ordering experience by offering a seamless and user-friendly platform for navigating our diverse menu. Employing a dynamic technology stack including XAMPP server, PHP, HTML, CSS, and MySQL ensures a responsive and efficient platform. The primary impact lies in simplifying the ordering process, allowing users to effortlessly select dishes and complete orders with just a few clicks. This approach prioritizes an efficient and enjoyable user experience, emphasizing accessibility and ease of use for customers engaging with our diverse menu.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saumyaladdha/silver_spoon",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "This project aims to elevate user engagement by developing a dynamic e-commerce platform that prioritizes enhanced user experiences. The technology foundation is built using the MERN stack, incorporating MongoDB, Express.js, React, and Node.js, ensuring a robust and efficient infrastructure. The core impact focuses on ensuring transaction security and improving user satisfaction through the implementation of intuitive interfaces and efficient product catalog management. The result is a seamless and user-friendly e-commerce experience that enhances overall engagement and satisfaction for customers interacting with the platform.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saumyaladdha/Ecommerce",
   
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Integrates security and communication features for an optimal user experience. Leveraging Next.js, Tailwind CSS, and the Resend API, the technology stack is designed to ensure a secure, feature-rich portfolio with a user-centric design. The impact of this initiative is reflected in the enhanced web presence, offering a dynamic portfolio that optimizes user experiences. Deployment through Netlify further highlights skills and achievements effectively, providing a comprehensive showcase of my professional capabilities and accomplishments.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Saumyaladdha/Portfolio",
   
  },
  {
    id: 5,
    title: "E_Commerce_Shipping_Prediction",
    description: "This project focuses on revolutionizing logistics operations by employing advanced data analytics, specifically utilizing Random Forest and Gradient Boosting algorithms on a dataset of 10,999 observations. The resultant predictive model has successfully tackled challenges such as delivery delays and operational inefficiencies. By optimizing route planning and resource allocation, the model ensures a higher percentage of on-time deliveries, leading to improved operational efficiency and heightened customer satisfaction. This initiative not only addresses prevalent logistics challenges but also sets the groundwork for continuous refinement, future scalability, and integration with real-time data to further enhance the overall logistics framework.",
    image: "/images/projects/5.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Saumyaladdha/Ecommerce_pred",
   
  },
  {
    id: 6,
    title: "Virtual Assistant",
    description: "EmpoweringVision is a groundbreaking project aimed at addressing the challenges faced by visually impaired individuals by harnessing advanced AI features on a mobile-responsive website. Through cutting-edge technologies like face recognition and text-to-speech, the virtual assistant provides an inclusive and empowering experience for users. The face recognition component enhances social interactions by offering real-time information about people in the surroundings, while the text-to-speech feature ensures seamless access to digital content. The mobile-responsive design ensures accessibility, allowing visually impaired individuals to navigate the virtual assistant effortlessly, fostering improved mobility, social engagement, and enhanced access to information in their daily lives",
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
