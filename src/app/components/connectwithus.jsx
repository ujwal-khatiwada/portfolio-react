"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export const ConnectWithUs = ({variant}) => {
  const icons = [
    { name: "Facebook", href: "https://www.facebook.com/ujwal.khatiwadaa", icon: <FaFacebookF />, hover: "hover:text-blue-600" },
    { name: "Instagram", href: "https://www.instagram.com/ujwal_khatiwadaa", icon: <FaInstagram />, hover: "hover:text-pink-600" },
    { name: "X", href: "https://x.com/ujwalkhatiwadaa", icon: <FaTwitter />, hover: "hover:text-blue-700" },
    { name: "Github", href: "https://github.com/ujwal-khatiwada", icon: <FaGithub />, hover: "hover:text-gray-400" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ujwal-khatiwada/", icon: <FaLinkedin />, hover: "hover:text-blue-700" },
];

  function ConnectWithUsLink({ href, children, hover }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-[var(--button)] transition text-2xl ${hover}`}
      >
        {children}
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center md:mt-5 py-4">
      <Typography variant={variant} color='primary' className="mb-4 text-2xl font-bold uppercase">
        CONNECT WITH ME ON:
      </Typography>
      <div className="flex space-x-6">
        {icons.map(({ name, href, icon, hover }) => (
          <ConnectWithUsLink key={name} href={href} hover={hover}>
            {icon}
          </ConnectWithUsLink>
        ))}
      </div>
    </div>
  );
};

