"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  BellIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

export function Test() {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  // Auto close mobile nav on resize
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    return () => window.removeEventListener("resize", () => {});
  }, []);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a href="#" className="flex items-center text-gray-900 dark:text-gray-100">Pages</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a href="#" className="flex items-center text-gray-900 dark:text-gray-100">Account</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a href="#" className="flex items-center text-gray-900 dark:text-gray-100">Docs</a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className="mx-auto max-w-screen-xl px-4 py-3 lg:px-8 lg:py-4 sticky top-0 z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg shadow-md"
      fullWidth
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold text-xl text-blue-500"
        >
          Ujwal
        </Typography>

        {/* Desktop Nav */}
        <div className="hidden lg:block">{navList}</div>

        {/* Right side actions */}
        <div className="flex items-center gap-x-4">
          {/* Search */}
          <div className="hidden lg:block w-56">
            <Input label="Search..." crossOrigin={undefined} />
          </div>

          {/* Dark Mode Toggle */}
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </IconButton>

          {/* Notifications */}
          <IconButton variant="text" color="blue-gray">
            <BellIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </IconButton>

          {/* Profile Dropdown */}
          <Menu open={openProfile} handler={setOpenProfile} placement="bottom-end">
            <MenuHandler>
              <Avatar
                src="https://i.pravatar.cc/40"
                alt="user"
                className="cursor-pointer"
              />
            </MenuHandler>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>

          {/* Auth buttons (desktop) */}
          <div className="hidden lg:flex gap-2">
            <Button variant="text" size="sm">Log In</Button>
            <Button variant="gradient" size="sm">Sign Up</Button>
          </div>

          {/* Mobile nav toggle */}
          <IconButton
            variant="text"
            className="ml-2 h-6 w-6 text-inherit lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="my-4">
            <Input label="Search..." crossOrigin={undefined} />
          </div>
          <div className="flex items-center gap-2">
            <Button fullWidth variant="text" size="sm">Log In</Button>
            <Button fullWidth variant="gradient" size="sm">Sign Up</Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Test;
