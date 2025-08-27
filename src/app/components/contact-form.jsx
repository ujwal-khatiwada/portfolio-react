"use client";

import React, { useState } from "react";
import { ConnectWithUs } from "../components";
import { useSession } from "next-auth/react";

const ContactFormComp = () => {
  const { data: session } = useSession();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // success or error message
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!session) {
    setStatus({ type: "error", message: "Login required to send a message." });
    return;
  }

  // Trim values
  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  // 1️⃣ Check if fields are empty
  if (!trimmedFirstName || !trimmedLastName || !trimmedEmail || !trimmedMessage) {
    setStatus({ type: "error", message: "All fields are required." });
    return;
  }

  // 2️⃣ Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    setStatus({ type: "error", message: "Please enter a valid email." });
    return;
  }

  // ✅ Passed validation, proceed
  setLoading(true);
  setStatus(null); // clear previous messages

  // Trusted email check
  const trustedDomains = ["gmail.com", "outlook.com", "yahoo.com"];
  const emailDomain = trimmedEmail.split("@")[1] || "";
  const isTrusted = trustedDomains.includes(emailDomain.toLowerCase());

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: trimmedFirstName,
        lastName: trimmedLastName,
        email: trimmedEmail,
        message: trimmedMessage,
        isTrusted,
        loggedInEmail: session.user?.email || "",
      }),
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data?.error || "Something went wrong!");

    setStatus({ type: "success", message: "Message sent successfully!" });
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  } catch (err) {
    setStatus({ type: "error", message: err.message });
  } finally {
    setLoading(false);
  }
};





  return (
    <section className="px-8">
      <div className="relative flex flex-col bg-[var(--container)] rounded-2xl shadow-md max-w-[85rem] mx-auto text-gray-700">
        <div className="grid p-2 grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 items-center">
          <div className="p-6 ">
            <form className="flex flex-col gap-6 lg:max-w-lg mx-auto w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative w-full h-12">
                  <input
                    name="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="eg. Ujwal"
                    className="peer w-full h-full text-[var(--foreground)] font-normal outline-0 border-b border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900 transition-all"
                  />
                  <label className="absolute z-10 left-0 -top-2.5 text-gray-500 text-sm peer-focus:text-[var(--notcontainer)] transition-all">
                  First Name
                  </label>
                </div>

                <div className="relative w-full h-12">
                  <input
                    name="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="eg. Khatiwada"
                    className="peer w-full h-full text-[var(--foreground)] font-normal outline-0 border-b border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900 transition-all"
                  />
                  <label className="absolute z-10 left-0 -top-2.5 text-gray-500 text-sm peer-focus:text-[var(--notcontainer)] transition-all">
                    Last Name
                  </label>
                </div>
              </div>

              <div className="relative w-full h-12">
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="eg. ujwalkhatiwada@mail.com"
                  className="peer w-full h-full text-[var(--foreground)] font-normal outline-0 border-b border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900 transition-all"
                />
                <label className="absolute z-10 left-0 -top-2.5 text-gray-500 text-sm peer-focus:text-[var(--notcontainer)] transition-all">
                  Email
                </label>
              </div>

              <div className="relative w-full">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=" "
                  rows={3}
                  className="peer w-full text-[var(--foreground)] font-normal outline-0 border-b border-blue-gray-200 text-sm px-px pt-5 pb-2 focus:border-gray-900 transition-all resize-none"
                />
                <label className="absolute z-10 left-0 -top-2.5 text-gray-500 text-sm peer-focus:text-[var(--notcontainer)] transition-all">
                  Your Message
                </label>
              </div>

              {status && (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl text-white font-semibold transition-all ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="rounded-2xl bg-[var(--nestedContainer)] p-10 w-full text-white">
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
                <a href="mailto:ujwalkhatiwada501@gmail.com">
                  ujwalkhatiwada501@gmail.com
                </a>
              </p>
            </div>

            <div className="flex space-x-6">
              <ConnectWithUs variant='h5'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormComp;
