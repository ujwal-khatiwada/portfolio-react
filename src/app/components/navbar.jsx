"use client";


import React, { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

// Navigation items
const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
  },
  {
    name: "Account",
    icon: UserCircleIcon,
    href: "/accounts",
  },
  {
    name: "Docs",
    icon: CommandLineIcon,
    href: "#",
  },
];

// ✅ JS version of NavItem (no TypeScript interface)
function NavItem({ children, href }) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        className="flex items-center gap-2 text-lg font-medium "
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
  setOpen((cur) => {
    console.log("Toggling:", !cur);
    return !cur;
  });
};


  useEffect(() => {
    const resizeHandler = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <MTNavbar variant="gradient" color="gray-blue" shadow={false} fullWidth className="border-0 h-20 z-50">
      <div className="container bg-none mx-auto flex items-center justify-between">
        {/* Brand */}
        <Typography className="text-3xl font-bold text-blue-500">
          Ujwal
        </Typography>

        {/* Desktop Nav */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5 text-white/70"/>
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button >Sign In</Button>
          <a href="#">
            <Button color="gray">Blocks</Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
<div
        className={`lg:hidden overflow-hidden transition-all duration-100 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 border-b border-gray-200 rounded-2xl flex flex-col gap-4 bg-white/30 backdrop-blur-md">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5 text-gray-900" />
                    <Button variant="text">{name}</Button>
              </NavItem>
            ))}
          </ul>
          <div className="mt-4 flex rounded-lg justify-around">
            <Button variant="text">Sign In</Button>
            <a href="#">
              <Button variant="text">Blocks</Button>
            </a>
          </div>
        </div>
      </div>

    </MTNavbar>
  );
}

export default Navbar;


