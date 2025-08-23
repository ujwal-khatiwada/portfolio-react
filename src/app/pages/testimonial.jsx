"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    id: 1,
    title: "Web App Development",
    feedback:
      "I had the pleasure of working with Ujwal on a critical web development project, and I can confidently say that his expertise and professionalism exceeded my expectations.",
    name: "Prajwal",
    role: "Designer @ Kharayo Inc.",
    image: "/image/prajwal.jpg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    feedback:
      "Ujwal created a responsive mobile app for our startup. His attention to detail and clear communication made the entire process smooth and efficient.",
    name: "Biraj Bhattarai",
    role: "CEO @ NepTech Solutions",
    image: "/image/biraj.jpg",
  },
  {
    id: 3,
    title: "UI/UX & Optimization",
    feedback:
      "Thanks to Ujwal’s expertise, our product not only looks stunning but also performs flawlessly. He truly understands user experience.",
    name: "Ramesh Adhikari",
    role: "Product Manager @ DesignHub",
    image: "/image/ujwal.jpg",
  },
];

export function Testimonial() {
  const [active, setActive] = React.useState(1);

  const activeTestimonial = TESTIMONIALS.find((t) => t.id === active);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        {/* Section Heading */}
        <div className="container mx-auto mb-20 text-center">
                  <Typography variant="h1" color='primary' className="mb-2 text-2xl font-bold uppercase">
            What Clients Say
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </Typography>
        </div>

        {/* Testimonial Card */}
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between">
            {/* Left Side Text */}
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h4"
                color="primary"
                className="mb-4 font-bold lg:max-w-xs"
              >
                {activeTestimonial.title}
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                {activeTestimonial.feedback}
              </Typography>
              <Typography variant="h6" color="primary" className="mb-0.5">
                {activeTestimonial.name}
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                {activeTestimonial.role}
              </Typography>

              {/* Avatars */}
              <div className="flex items-center gap-4">
                {TESTIMONIALS.map((t) => (
                  <React.Fragment key={t.id}>
                    <Avatar
                      variant="rounded"
                      src={t.image}
                      alt={t.name}
                      size="xsz"
                      className={`cursor-pointer ${
                        active === t.id ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setActive(t.id)}
                    />
                    {t.id < TESTIMONIALS.length && (
                      <div className="w-[1px] h-[36px] bg-blue-gray-100"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Side Image */}
            <div className="h-[21rem] hidden md:block rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={activeTestimonial.image}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
