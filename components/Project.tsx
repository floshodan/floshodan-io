import React from 'react';
import { GolangIcon, TailwindIcon, NextJSIcon, TerraformIcon, DockerIcon } from '../icons/icons';



interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

interface TagIcons {
  [key: string]: JSX.Element;
}

const tagIcons: TagIcons = {
  golang: <GolangIcon />,
  tailwind: <TailwindIcon />,
  nextjs: <NextJSIcon />,
  terraform: <TerraformIcon />,
  docker: <DockerIcon />
};

const Project: React.FC<ProjectProps> = ({ title, description, tags, link }) => {
  return (
    <li className="group relative flex flex-col items-start">
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <a href={link} target="_blank">
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10 group-hover:text-sky-500">{title}</span>
        </a>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>

      <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-sky-500 dark:text-zinc-200">
        {tags.map((tag, index) => (
          <div className="flex items-center" key={index}>
          <div className={`w-6 h-6 ${index > 0 ? 'mr-2 ml-2' : 'mr-2'}`}>
              {tagIcons[tag]}
            </div>
            <span>{tag}</span>
          </div>
        ))}
      </div>
    </li>
  );
};

export default Project;

