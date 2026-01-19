"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Core CS Concepts",
    id: "core-cs",
    content: (
      <ul className="list-disc pl-4">
        <li>Data Structures & Algorithms</li>
        <li>Object-Oriented Programming (OOPs)</li>
        <li>Database Management Systems (DBMS)</li>
        <li>Computer Networks</li>
      </ul>
    ),
  },
  {
    title: "AI & Data Science Concepts",
    id: "ai-data-science",
    content: (
      <ul className="list-disc pl-4">
        <li>Machine Learning</li>
        <li>Artificial Intelligence</li>
        <li>Natural Language Processing (NLP)</li>
        <li>Large Language Models (LLMs)</li>
        <li>Data Mining</li>
      </ul>
    ),
  },
  {
    title: "AI/ML Frameworks",
    id: "ai-ml-frameworks",
    content: (
      <ul className="list-disc pl-4">
        <li>LangChain</li>
        <li>LangGraph</li>
        <li>TensorFlow</li>
        <li>PyTorch</li>
        <li>Scikit-learn</li>
      </ul>
    ),
  },
  {
    title: "Web & Backend Frameworks",
    id: "web-backend",
    content: (
      <ul className="list-disc pl-4">
        <li>React.js</li>
        <li>Node.js</li>
        <li>Flask</li>
        <li>FastAPI</li>
      </ul>
    ),
  },
  {
    title: "Databases & Caching",
    id: "databases",
    content: (
      <ul className="list-disc pl-4">
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Vector Databases</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-4">
        <li>C / C++</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "DevOps & Cloud",
    id: "devops-cloud",
    content: (
      <ul className="list-disc pl-4">
        <li>Docker</li>
        <li>Git</li>
        <li>AWS</li>
      </ul>
    ),
  },
  {
    title: "Tools & Utilities",
    id: "tools",
    content: (
      <ul className="list-disc pl-4">
        <li>Pandas</li>
        <li>NumPy</li>
        <li>OpenCV</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("core-cs");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About Saumya Laddha"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-base lg:text-lg">
            I&apos;m an AI/ML Engineer with a strong foundation in computer science and
            a passion for building intelligent, scalable systems. I enjoy working
            on real-world AI problems—from multi-agent architectures and adaptive
            interview systems to semantic search and LLM-powered applications.
          </p>

          {/* Scrollable Tabs */}
          <div className="mt-8 overflow-x-auto scrollbar-hide">
            <div className="flex flex-nowrap gap-3 min-w-max">
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
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
