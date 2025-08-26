"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Footer, Navbar, ConnectWithUs } from "../components";

export default function ResumePage() {
  // Target date (example: 12 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 12);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotify = () => {
    if (!email) return alert("Please enter your email!");
    alert(`We'll notify you at: ${email}`);
    setEmail("");
  };

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
            <div className="flex gap-2 sm:gap-4">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col items-center bg-[var(--nestedContainer)] px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow"
                >
                  <span className="text-lg sm:text-2xl font-bold">{value ?? "00"}</span>
                  <span className="text-xs sm:text-sm capitalize">{key}</span>
                </div>
              ))}
            </div>

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
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none text-sm sm:text-base"
              />
              <button
                onClick={handleNotify}
                className="bg-black text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 transition"
              >
                NOTIFY ME
              </button>
            </div>

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
