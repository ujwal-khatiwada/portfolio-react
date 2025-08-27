export async function GET() {
  return new Response(JSON.stringify({ serverTime: Date.now() }), {
    headers: { "Content-Type": "application/json" },
  });
}
