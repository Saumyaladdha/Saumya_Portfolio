import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div
        className="h-48 sm:h-56 md:h-64 lg:h-72 rounded-t-xl relative group overflow-hidden"
        style={{ 
          background: `url(${imgUrl})`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center" 
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 sm:h-14 sm:w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
          >
            <CodeBracketIcon className="h-8 w-8 sm:h-10 sm:w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white transition-colors" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-4 sm:py-6 px-3 sm:px-4 flex-1 flex flex-col">
        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 break-words">{title}</h5>
        {description && <p className="text-[#ADB7BE] text-sm sm:text-base mb-2">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
