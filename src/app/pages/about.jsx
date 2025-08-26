"use client"

import React from 'react'
import { Typography } from '@material-tailwind/react'

const About = () => {
  return (
  <section className="px-8">
    <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color='primary' className="mb-2 text-2xl font-bold uppercase ">
            About Me
        </Typography>
        <Typography
    
        variant="lead"
        className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
        I&apos;m Ujwal.
        </Typography>
    </div>
    </section>
  )
}

export default About