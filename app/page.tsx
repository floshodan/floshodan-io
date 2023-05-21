import React from "react";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import EmailButton from "components/EmailButton";
import projects from '../data/projects.json';
import Project from '../components/Project';
import Hero from '../components/Hero';
import Heading from '../components/Heading';
import Link from "next/link";
import ReadMore from "components/ReadMore";

const Home = () => {
  return (
    <div className="px-4 pt-14 h-10 max-w-5xl mx-auto mb-auto ">
        <Hero />
        <Heading title="featured blog posts" subtitle="my most viewed blog posts" />

        <div className="sm:grid sm:grid-cols-2 sm:gap-10">
      {allPosts
        .filter(post => post.featured)
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .slice(0, 2)
        .map((post) => (
          <div className="mt-10">
            <Link
              href={`${post.url}`}
              className="text-gray-800 group block focus:text-sky-500 focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
            >
              <div className="inline-block shadow-2xl w-full overflow-hidden relative m-0">
                <Image
                  src={`/${post.image}`}
                  alt={`${post.title}`}
                  width={700}
                  height={250}
                  className={"group-hover:scale-110 transition-all duration-700 w-full h-[250px] rounded-lg shadow-xl"}
                />
              </div>
              <h2 className="text-lg font-bold group-hover:text-sky-500 dark:text-slate-100">
                      {`${post.title}`}
              </h2>
              <p className="dark:text-zinc-400 line-clamp-2">
                            {`${post.summary}`}
              </p>
            </Link>
          </div>
        ))}
        <ReadMore title="read more blog posts" url="/posts" /> 
      </div>

     <Heading title="active projects" subtitle="a collection of some projects that I'm currentyly working on" />

      <div className="pt-8 sm:pt-6">
  <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </ul>
        <ReadMore title="view all projects" url="https://github.com/floshodan" /> 

      </div>


     <Heading title="get in touch" subtitle="" />
      <div>
        <p className="pt-2 pb-5 text-base text-zinc-600 dark:text-zinc-400">
          Do you have a job opportunity or idea you'd like to discuss? Feel free
          to reach out my inbox is always open. Whether you have a question, a job oportunity or just want to say hi, I’ll try my best to get back to you!
        </p>
          <EmailButton />
        <p className="pt-2 pb-5 text-base text-zinc-600 dark:text-zinc-400">
          You can also reach me on <a className="text-sky-500 dark:text-sky-400" href='https://github.com/floshodan'>Github</a> or <a className="text-sky-500 dark:text-sky-400" href='https://linkedin.com/in/floshodan'>LinkedIn.</a>
          </p>

      </div>
    </div>
  );
};

export default Home;
