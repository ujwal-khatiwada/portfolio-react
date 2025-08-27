"use client";
import { useState, useEffect } from "react";
import React from 'react'
import {supabase} from "../../lib/supabase";

const Mailnotify = () => {
    
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");


  const handleNotify = async () => {
    if (!email) return setSuccessMsg("Please enter your email!");
  
    setLoading(true);
  
    // Check if email already exists
    const { data: existing, error: checkError } = await supabase
      .from("notifications")
      .select("email")
      .eq("email", email)
      .single();
  
    if (checkError && checkError.code !== "PGRST116") { // PGRST116 = no rows found
      setLoading(false);
      return setSuccessMsg("Something went wrong. Try again!");
    }
  
    if (existing) {
      setLoading(false);
      return setSuccessMsg("This email is already subscribed!");
    }
  
    // Insert new email
    const { data, error } = await supabase
      .from("notifications")
      .insert([{ email }]);
  
    setLoading(false);
  
    if (error) {
      console.error(error);
      setSuccessMsg("Something went wrong. Try again!");
    } else {
      setSuccessMsg(`You're subscribed! We'll notify you at: ${email}`);
      setEmail(""); // clear input
    }
  };
  return (
    <div>
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
            disabled={loading}
            className="bg-black text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 transition disabled:opacity-50"
            >
            {loading ? "Submitting..." : "NOTIFY ME"}
            </button>
        </div>
            {successMsg && (
            <p className="text-green-600 mt-1 text-sm">{successMsg}</p>
            )}
    </div>
  )
}

export default Mailnotify