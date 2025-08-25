"use client";
import { Button } from "@material-tailwind/react";

export default function ConstButton({ name, email, message }) {
  const sendMessage = async () => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.success) alert("Message sent!");
    else alert("Error: " + data.error);
  };

  return <Button onClick={sendMessage}>Send message</Button>;
}
