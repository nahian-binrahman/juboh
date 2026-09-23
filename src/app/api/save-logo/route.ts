import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { base64Data } = await req.json();
    const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(cleanBase64, "base64");
    const dest = path.join(process.cwd(), "public", "juboh-logo-transparent.png");
    fs.writeFileSync(dest, buffer);
    return NextResponse.json({ success: true, size: buffer.length });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
