import nodemailer from "nodemailer";



export async function POST(req) {
  const { firstName, lastName, email, message, loggedInEmail } = await req.json();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: "ujwalkhatiwada501@gmail.com",
      subject: `New Message from ${firstName} ${lastName}`,
      text: `You have received a new message from ${loggedInEmail} as ${email}. \n \n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
