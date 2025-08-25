// "use client";

// import {
//   Typography,
//   Card,
//   CardBody,
//   Radio,
//   Input,
//   Textarea,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";
// import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

// export function ContactForm() {
//   return (
//     // <section className="px-8 py-16">
//     //   <div className="container mx-auto mb-20 text-center">
//     //     <Typography variant="h1" color='primary' className="mb-4">
//     //       Contact Us
//     //     </Typography>
//     //     <Typography
//     //       variant="lead"
//     //       className="mx-auto w-full lg:w-5/12 !text-gray-500"
//     //     >
//     //       Ready to get started? Feel free to reach out through the contact form,
//     //       and let&apos;s embark on a journey of innovation and success.
//     //     </Typography>
//     //   </div>
//     //   <div>
//     //     <Card shadow={true} className="container mx-auto border border-gray/50">
//     //       <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
//     //         <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
//     //           <Typography variant="h4" color="white" className="mb-2">
//     //             Contact Information
//     //           </Typography>
//     //           <Typography
//     //             variant="lead"
//     //             className="mx-auto mb-8 text-base !text-gray-500"
//     //           >
//     //             Fill up the form and our Team will get back to you within 24
//     //             hours.
//     //           </Typography>
//     //           <div className="flex gap-5">
//     //             <PhoneIcon className="h-6 w-6 text-white" />
//     //             <Typography variant="h6" color="white" className="mb-2">
//     //               +977 981-6030281
//     //             </Typography>
//     //           </div>
//     //           <div className="flex my-2 gap-5">
//     //             <EnvelopeIcon className="h-6 w-6 text-white" />
//     //             <Typography variant="h6" color="white" className="mb-2">
//     //               ujwalkhatiwada501@mail.com
//     //             </Typography>
//     //           </div>
//     //           <div className="flex items-center gap-5">
//     //             <IconButton variant="text" color="white">
//     //               <i className="fa-brands fa-facebook text-lg" />
//     //             </IconButton>
//     //             <IconButton variant="text" color="white">
//     //               <i className="fa-brands fa-instagram text-lg" />
//     //             </IconButton>
//     //             <IconButton variant="text" color="white">
//     //               <i className="fa-brands fa-github text-lg" />
//     //             </IconButton>
//     //           </div>
//     //         </div>
//     //         <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
//     //           <form action="#">
//     //             <div className="mb-8 grid gap-4 lg:grid-cols-2">
//     //               {/* @ts-ignore */}
//     //               <Input
//     //                 color="gray"
//     //                 size="lg"
//     //                 variant="static"
//     //                 label="First Name"
//     //                 name="first-name"
//     //                 placeholder="eg. Ujwal"
//     //                 containerProps={{
//     //                   className: "!min-w-full mb-3 md:mb-0",
//     //                 }}
//     //               />
//     //               {/* @ts-ignore */}
//     //               <Input
//     //                 color="gray"
//     //                 size="lg"
//     //                 variant="static"
//     //                 label="Last Name"
//     //                 name="last-name"
//     //                 placeholder="eg. Khatiwada"
//     //                 containerProps={{
//     //                   className: "!min-w-full",
//     //                 }}
//     //               />
//     //             </div>
//     //             {/* @ts-ignore */}
//     //             <Input
//     //               color="gray"
//     //               size="lg"
//     //               variant="static"
//     //               label="Email"
//     //               name="email"
//     //               placeholder="eg. ujwalkhatiwada@mail.com"
//     //               containerProps={{
//     //                 className: "!min-w-full mb-8",
//     //               }}
//     //             />
//     //             <Typography
//     //               variant="lead"
//     //               className="!text-blue-gray-500 text-sm mb-2"
//     //             >
//     //               What are you interested on?
//     //             </Typography>
//     //             <div className="-ml-3 mb-14 ">
//     //               {/* @ts-ignore */}
//     //               <Radio
//     //                 color="gray"
//     //                 name="type"
//     //                 label="Design"
//     //                 defaultChecked
//     //               />
//     //               {/* @ts-ignore */}
//     //               <Radio color="gray" name="type" label="Development" />
//     //               {/* @ts-ignore */}
//     //               <Radio color="gray" name="type" label="Support" />
//     //               {/* @ts-ignore */}
//     //               <Radio color="gray" name="type" label="Other" />
//     //             </div>
//     //             {/* @ts-ignore */}
//     //             <Textarea
//     //               color="gray"
//     //               size="lg"
//     //               variant="static"
//     //               label="Your Message"
//     //               name="first-name"
//     //               containerProps={{
//     //                 className: "!min-w-full mb-8",
//     //               }}
//     //             />
//     //             <div className="w-full flex justify-end">
//     //               <Button className="w-full md:w-fit" color="gray" size="md">
//     //                 Send message
//     //               </Button>
//     //             </div>
//     //           </form>
//     //         </div>
//     //       </CardBody>
//     //     </Card>
//     //   </div>
//     // </section>

    
//   );
// }

// export default ContactForm;





"use client";

import React from "react";
import { Button } from "@material-tailwind/react";
import { ConnectWithUs } from "../components";

const ContactForm = () => {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto mb-16 text-center lg:mb-20">
        <h1 className="text-3xl lg:text-4xl font-semibold text-blue-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-500 text-base lg:text-xl mx-auto">
          Any questions or remarks? Just write us a message!
        </p>
      </div>

      <div className="relative flex flex-col bg-white rounded-2xl shadow-md max-w-[85rem] mx-auto text-gray-700">
        {/* Form */}
        <div className="grid p-2 grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 items-center">
          <div className="p-6 lg:p-16">
              <form className="flex flex-col gap-12 lg:max-w-lg mx-auto w-full">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative w-full h-12">
                  <input
                    name="first-name"
                    placeholder="eg. Ujwal"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline-0 border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900 transition-all"
                  />
                  <label className="absolute left-0 -top-2.5 text-gray-500 text-sm peer-focus:text-gray-900 transition-all">
                    First Name
                  </label>
                </div>
                <div className="relative w-full h-12">
                  <input
                    name="last-name"
                    placeholder="eg. Khatiwada"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline-0 border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900 transition-all"
                  />
                  <label className="absolute left-0 -top-2.5 text-gray-500 text-sm peer-focus:text-gray-900 transition-all">
                    Last Name
                  </label>
                </div>
              </div>

              <div className="relative w-full h-12">
                <input
                  name="email"
                  placeholder="eg. ujwalkhatiwada@mail.com"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline-0 border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900 transition-all"
                />
                <label className="absolute left-0 -top-2.5 text-gray-500 text-sm peer-focus:text-gray-900 transition-all">
                  Email
                </label>
              </div>

              <div className="relative w-full h-12">
                <input
                  name="message"
                  placeholder=" "
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline-0 border-b border-blue-gray-200 placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900 transition-all"
                />
                <label className="absolute left-0 -top-2.5 text-gray-500 text-sm peer-focus:text-gray-900 transition-all">
                  Your Message
                </label>
              </div>

              <div className="flex justify-end lg:mt-24">
                {/* <button
                  type="button"
                  className="font-bold text-xs py-3 px-6 rounded-lg bg-[--button] text-white shadow-md hover:shadow-lg focus:opacity-85 active:opacity-85 w-full md:w-fit transition-all"
                >
                  Send message
                </button> */}
                <Button>Send message</Button>
              </div>
            </form>
          </div>
          

          {/* Contact Info */}
          <div className="rounded-2xl bg-gray-900 lg:p-20 p-10 w-full text-white">
            <h4 className="text-xl lg:text-3xl font-semibold mb-4">
              Contact Information
            </h4>
            <p className="text-base lg:mb-12 mb-8 opacity-50 max-w-sm">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>

            <div className="flex items-center gap-5 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-3 w-3 md:h-5 md:w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <h6 className="md:font-semibold">+977 9816030281</h6>
            </div>

            <div className="flex items-center gap-5 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-3 w-3 md:h-5 md:w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <p className="md:font-semibold">
                <a href="mailto:ujwalkhatiwada501@gmail.com">ujwalkhatiwada501@gmail.com</a>
              </p>
            </div>

            

            {/* Social Icons */}
            {/* <div className="flex items-center gap-1.5">
              {[FaTwitter, FaLinkedin, FaDribbble, FaFacebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 active:bg-white/30">
                  <Icon className="text-xl" />
                </a>
              ))}
            </div> */}
            <div className="flex space-x-6">
                <ConnectWithUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

