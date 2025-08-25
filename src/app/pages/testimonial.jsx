"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

// ✅ keep data outside component (prevents re-creation on every render)
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
    image: "/image/ujwal.webp",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(1);

  // ✅ memoize active testimonial to avoid recalculating on every render
  const activeTestimonial = useMemo(
    () => TESTIMONIALS.find((t) => t.id === active),
    [active]
  );

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        {/* Section Heading */}
        <div className="container mx-auto mb-20 text-center">
          <Typography
            variant="h1"
            color="primary"
            className="mb-2 text-2xl font-bold uppercase"
          >
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
                {TESTIMONIALS.map((t, idx) => (
                  <React.Fragment key={t.id}>
                    <Avatar
                      variant="rounded"
                      src={t.image}
                      alt={t.name}
                      size="md" // ✅ fixed invalid "xsz" → use "sm" or "md"
                      className={`cursor-pointer transition-opacity duration-200 ${
                        active === t.id ? "opacity-100" : "opacity-50"
                      }`}
                      onClick={() => setActive(t.id)}
                    />
                    {idx < TESTIMONIALS.length - 1 && (
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
                alt={`${activeTestimonial.name} testimonial`}
                src={activeTestimonial.image}
                className="h-full rounded-lg w-full object-cover"
                priority // ✅ improve LCP by eager loading this
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
