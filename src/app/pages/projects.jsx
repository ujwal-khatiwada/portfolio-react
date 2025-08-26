"use client";

import { ProjectCard } from "../components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: `/image/focuspoint.png`,
    title: "Website For Driving School",
    desc: "Web app designed to help users discover and explore Focus Point driving school.",
    link:"https://focuspointdrivingschool.com.np",
  },
  {
    img: `/image/schoolmanagement.png`,
    title: "School Management System",
    desc: "Ongoing project which was started a year ago for school management.",
    link:"https://schoolmanagement.ujwalkhatiwada.com.np",
  },
  {
    img: `/image/compviva.png`,
    title: "Random Stuffs",
    desc: "Just made when bored for fun. Just a small projects.",
    link:"https://compviva.ujwalkhatiwada.com.np",
  },
  {
    img: `/image/none.png`,
    title: "Random Stuffs",
    desc: "Enhanced the trending web ideas.",
    link:"https://valentine.ujwalkhatiwada.com.np/",
  },
];


export function Projects() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
          <Typography variant="h1" color='primary' className="mb-2 text-2xl font-bold uppercase ">
          My Projects
        </Typography>
        <Typography
      
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          I&apos;m here to turn your digital dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid justify-items-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
