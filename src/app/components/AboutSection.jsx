"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>PHP</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Software and Tools",
    id: "softwareAndTools",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>MATLAB</li>
        <li>TensorFlow</li>
        <li>PyTorch</li>
        <li>sci-kit-learn</li>
        <li>OpenCV</li>
        <li>Data analysis tools such as Jupyter Notebook, pandas, and Tableau</li>
      </ul>
    ),
  },
  {
    title: "Area of Study",
    id: "areaOfStudy",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Structures</li>
        <li>Algorithms</li>
        <li>Database Management</li>
        <li>Full Stack Development</li>
        <li>Object-Oriented Programming</li>
        <li>Software Engineering</li>
        <li>Computer Networks</li>
        <li>AI/ML (Artificial Intelligence/Machine Learning)</li>
        <li>Deep Learning</li>
        <li>Computer Graphics</li>
        <li>Data Analysis</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
    <li>
      <b>Rajiv Gandhi Institute of Petroleum Technology</b>
      <ul>
        <ul>Institute of National Importance</ul>
        <ul>Bachelors in Computer Science in Engineering</ul>
      </ul>
    </li>

    <li>
      <b>St. Stevens</b>
      <ul>
      </ul>
    </li>

    <li>
      <b>Shri Guru Tegh Bahadur Academy</b>
      <ul>
      </ul>
    </li>
  </ul>
      
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am an aspiring SDE intern, equipped with a strong background in full-stack development and a solid foundation in AI/ML. Proficiency in both front-end and back-end technologies drives my passion for coding and problem- solving. My AI/ML knowledge adds an innovative dimension to my skill set. I am eager to contribute, learn, and collaborate on software projects, aiming to blend technical expertise with creative thinking to craft impactful and forward-thinking solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                id={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;