"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Navbar, ConnectWithUs, ClientLayout } from "../components";



function Hero() {
  return (
    <header className="min-h-screen px-8">
      <ClientLayout ><Navbar /></ClientLayout>
      <div className="container mx-auto grid md:h-[calc(100vh-5rem)] min-h-[60vh] md:items-center gap-4 md:gap-10 w-full grid-cols-1 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color='primary'
            className="mb-2 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my  <br />  Portfolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Ujwal Khatiwada, a passionate web developer based in Nepal. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development.
          </Typography>
            {/*
          <div className="grid"> 
          <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
//               @ts-ignore 
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography> 
         </div>*/}
          
        
            <ConnectWithUs />
         </div>


        <Image
          width={900}
          height={900}
          alt="team work"
          src='/ujwal.jpg'
          className="h-90 md:h-130 md:w-130 w-100 mt-4 md:mt-0 rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
