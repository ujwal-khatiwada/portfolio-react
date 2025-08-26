import { Typography } from "@material-tailwind/react";
import Link from "next/link";



const LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "AboutMe",
    href: "/aboutme",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className=" px-8">
      <div className="container mx-auto">
        <div className="mt-5 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made by{" "}
            <a href="https://github.com/ujwal-khatiwada" target="_blank">
              Ujwal
            </a>
            .
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map(({name, href}) => (
              <li key={name}>
                {/* <Typography
                  as="a"
                  href={href || "#"}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {name}
                </Typography> */}
                
                      <Link href={href || "#"} className="text-center font-normal !text-gray-700 flex items-center gap-2 text-lg">
                        {name}
                      </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
