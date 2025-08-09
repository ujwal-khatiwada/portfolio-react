"use client";

import { ProjectCard } from "../components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/blog-1.svg`,
    title: "Website For Driving School",
    desc: "Web app designed to help users discover and explore Focus Point driving school.",
    link:"https://focuspointdrivingschool.com.np",
  },
  {
    img: `${getImagePrefix()}image/blog4.svg`,
    title: "School Management System",
    desc: "Ongoing project which was started a year ago for school management.",
    link:"https://schoolmanagement.ujwalkhatiwada.com.np",
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Random Stuffs",
    desc: "Just made when bored for fun. Just a small projects.",
    link:"https://compviva.ujwalkhatiwada.com.np",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          I&apos;m here to turn your digital dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
