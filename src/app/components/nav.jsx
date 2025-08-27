"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar as MTNavbar, Button, IconButton, Typography } from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

import { signIn, signOut, useSession } from "next-auth/react";

// Navigation items
const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
    children: [
      { name: "About Me", icon: InformationCircleIcon, href: "/aboutme" },
      { name: "Projects", icon: BriefcaseIcon, href: "/projects" },
      { name: "Resume", icon: DocumentTextIcon, href: "/resume" },
    ],
  },
  {
    name: "Account",
    icon: UserCircleIcon,
    href: "/accounts",
  },
  {
    name: "Docs",
    icon: CommandLineIcon,
    href: "/docs",
  },
];

// ✅ NavItem
function NavItem({ children, href }) {
  return (
    <Link href={href || "#"} className="flex items-center gap-2 text-lg text-gray-900 font-medium">
      {children}
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [openPage, setOpenPage] = useState(false);
  const { data: session } = useSession();

  const handleOpen = () => {
    setOpen((cur) => !cur);
    console.log("clicked");
  };

  useEffect(() => {
    const resizeHandler = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <MTNavbar
      variant="filled"
      color="gray-blue"
      shadow={false}
      fullWidth
      className="bg-transparent border-0 h-20 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <Typography className="text-3xl font-bold text-blue-500">Ujwal</Typography>

        {/* Desktop Nav */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href, children }) => (
            <li
              key={name}
              className="relative group"
            >
              {children ? (
                <>
                  <button
                    onClick={() => setOpenPage((prev) => !prev)} // toggle on click
                    className="flex items-center gap-2 text-lg font-medium text-[var(--foreground)]"
                  >
                    <Icon className="h-5 w-5" />
                    {name}
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>

                  {openPage && (
                    <ul className="absolute left-0 mt-2 w-44 bg-[var(--foreground)] shadow-lg rounded-lg p-2 flex flex-col gap-2 z-50">
                      {children.map(({ name, icon: SubIcon, href }) => (
                        <li key={name}>
                          <Link
                            href={href}
                            className="flex items-center gap-2 px-2 py-1 text-[var(--background)] hover:bg-gray-100 rounded-md"
                          >
                            <SubIcon className="h-4 w-4" />
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavItem href={href} className="text-[var(--foreground)]">
                  <Icon className="h-5 w-5"/>
                  {name}
                </NavItem>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            onClick={() => (session ? signOut() : signIn("google"))}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          >
            {session ? "Sign Out" : "Sign In"}
          </Button>
        </div>

        {/* Mobile toggle */}
        {/* <IconButton
          variant="text"
          color="blue"
          onClick={handleOpen}
          className="lg:hidden flex items-center justify-center"
        >
          {open ? <XMarkIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />}
        </IconButton> */}
        <button
          onClick={handleOpen}
          className="lg:hidden flex items-center justify-center text-[var(--button)] p-2"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

      </div>

      {/* Mobile Dropdown */}
      <div className={`lg:hidden mt-4 overflow-hidden transition-all duration-300 z-8 ${open ? "max-h-350" : "max-h-0"}`}>
        <div className="container mx-auto px-4 py-4 border-b border-gray-200 rounded-2xl flex flex-col gap-4 bg-white/30 backdrop-blur-md">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href, children }) => (
              <li key={name}>
                {children ? (
                  <>
                    <div className="flex items-center gap-2 text-lg font-medium text-gray-900">
                      <Icon className="h-5 w-5" />
                      {name}
                    </div>
                    <ul className="ml-6 mt-2 flex flex-col gap-2">
                      {children.map(({ name, icon: SubIcon, href }) => (
                        <li key={name}>
                          <a href={href} className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                            <SubIcon className="h-4 w-4" />
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavItem href={href} className="text-gray-900">
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mt-4 flex rounded-lg justify-around">
            <Button onClick={() => (session ? signOut() : signIn("google"))} variant="text">
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </div>
        </div>
      </div>
    </MTNavbar>
  );
}

export default Nav;