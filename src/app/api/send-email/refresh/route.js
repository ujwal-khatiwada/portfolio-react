import { NextResponse } from "next/server";
import { refreshAccessToken } from "../../../../lib/google";

export async function POST() {
  try {
    const newToken = await refreshAccessToken();
    return NextResponse.json({ accessToken: newToken });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
