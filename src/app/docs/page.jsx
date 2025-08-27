"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Footer, Navbar, ConnectWithUs } from "../components";
import Countdown from "../components/countdown";
import { TARGET_DATE } from "../config";
import Mailnotify from "../components/mailnotify";

export default function DocsPage() {
  
  return (
    <div className=" min-h-[100dvh] flex flex-col justify-between">
      <Navbar />
      <div className="flex items-center justify-center bg-[var(--background)] px-4 sm:px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 items-center justify-items-end bg-[var(--container)] p-6 sm:p-8 rounded-2xl shadow-lg">
          
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Countdown */}
            <Countdown targetDate={TARGET_DATE}/>

            {/* Title + Description */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-snug">
              Our New Look is Almost Here!
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              I'm working hard to bring you a fresh new experience. Updated
              website will be faster, smarter, and more user-friendly. Stay tuned
              for the big reveal!
            </p>

            {/* Email Subscription */}
            <Mailnotify />

            {/* Social Icons - only on md+ */}
            <div className="pt-4 hidden md:block">
              <ConnectWithUs variant="h1" />
            </div>
          </motion.div>

          {/* Right Section (Image / Graphic) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-60 sm:h-70 hidden md:block md:h-[85%] md:w-[85%] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              width={900}
              height={900}
              alt="Coming Soon"
              src="/ujwal.jpg"
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
