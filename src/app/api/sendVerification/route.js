// import nodemailer from "nodemailer";
// import crypto from "crypto";
// import { supabase } from "../../../lib/supabase";

// export async function POST(req) {
//   const { email } = await req.json();

//   // Use custom header to detect site
//   const siteURL = req.headers.get("x-site") || process.env.NEXT_PUBLIC_SITE_URL;

//   // generate secure token
//   const token = crypto.randomBytes(32).toString("hex");

//   // save or update token in Supabase
//   const { error } = await supabase
//     .from("notifications")
//     .upsert({ email, token, verified: false }, { onConflict: "email" });

//   if (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: "Database error" }), { status: 500 });
//   }

//   const verifyLink = `${siteURL}/verify?token=${token}`;

//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS, // App Password
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Verify your subscription",
//       html: `<p>Click below to verify your email:</p>
//              <a href="${verifyLink}">${verifyLink}</a>`,
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//   }
// }
import { supabase } from "../../../lib/supabase";
import nodemailer from "nodemailer";
import crypto from "crypto";

export async function POST(req) {
  const { email } = await req.json();
  if (!email) {
    return new Response(JSON.stringify({ error: "Email required" }), { status: 400 });
  }

  // 1️⃣ Check if email already exists
  const { data: existing, error: checkError } = await supabase
    .from("notifications")
    .select("email")
    .eq("email", email)
    .single();

  if (checkError && checkError.code !== "PGRST116") {
    // PGRST116 = no rows found, which is OK
    return new Response(JSON.stringify({ error: "Database error" }), { status: 500 });
  }

  if (existing) {
    return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });
  }

  // 2️⃣ Generate token
  const token = crypto.randomBytes(3).toString("hex"); // short token

  // 3️⃣ Insert new row
  const { error: insertError } = await supabase
    .from("notifications")
    .insert({ email, token, verified: false });

  if (insertError) {
    return new Response(JSON.stringify({ error: "Failed to save email" }), { status: 500 });
  }

  // 4️⃣ Send email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your verification code",
      html: `<p>Your verification code is: <strong>${token}</strong></p>`,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
