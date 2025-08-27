// import { supabase } from "../../../lib/supabase";

// export async function GET(req) {
//   const url = new URL(req.url);
//   const token = url.searchParams.get("token");
//   const redirectUrl = url.searchParams.get("redirect"); // full URL

//   if (!token || !redirectUrl) {
//     return new Response("Invalid token or redirect URL", { status: 400 });
//   }

//   // Find the token in Supabase
//   const { data, error } = await supabase
//     .from("notifications")
//     .select("id")
//     .eq("token", token)
//     .single();

//   if (error || !data) {
//     return new Response("Invalid or expired token", { status: 400 });
//   }

//   // Mark email as verified and clear token
//   await supabase
//     .from("notifications")
//     .update({ verified: true, token: null })
//     .eq("id", data.id);

//   // Redirect to the full page URL with ?verified=true
//   const separator = redirectUrl.includes("?") ? "&" : "?";
//   return Response.redirect(`${redirectUrl}${separator}verified=true`);
// }
import { supabase } from "../../../lib/supabase";

export async function POST(req) {
  const { email, token } = await req.json();
  if (!email || !token) return new Response(JSON.stringify({ error: "Email and token required" }), { status: 400 });

  const { data, error } = await supabase
    .from("notifications")
    .select("id")
    .eq("email", email)
    .eq("token", token)
    .single();

  if (!data || error) return new Response(JSON.stringify({ error: "Invalid token" }), { status: 400 });

  await supabase
    .from("notifications")
    .update({ verified: true, token: null })
    .eq("id", data.id);

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
