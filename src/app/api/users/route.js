import { supabase } from "../../../lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name } = body;

    if (!name) return new Response(JSON.stringify({ error: "Name required" }), { status: 400 });

    const { data, error } = await supabase
      .from("users")
      .insert([{ name }])
      .select();

    if (error) throw error;

    return new Response(JSON.stringify({ message: "User added", data }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
