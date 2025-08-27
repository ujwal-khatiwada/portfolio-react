"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function VerifyPage() {
  const params = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("Invalid verification link.");
        return;
      }

      // find the email with this token
      const { data, error } = await supabase
        .from("notifications")
        .select("id")
        .eq("token", token)
        .single();

      if (error || !data) {
        setStatus("Invalid or expired token.");
        return;
      }

      // mark as verified
      const { error: updateError } = await supabase
        .from("notifications")
        .update({ verified: true, token: null })
        .eq("id", data.id);

      if (updateError) {
        setStatus("Something went wrong. Try again.");
      } else {
        setStatus("Your email has been verified and saved! 🎉");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg font-semibold">{status}</p>
    </div>
  );
}
