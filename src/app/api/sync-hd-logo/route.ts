import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const generatedPath = "C:/Users/Nahian- PC/.gemini/antigravity-ide/brain/b04be6b6-848f-411c-99f2-3a119b4b1b89/juboh_logo_hd_1790120666340.jpg";
  const publicJpg = path.join(process.cwd(), "public", "juboh-logo-hd.jpg");
  const publicPng = path.join(process.cwd(), "public", "juboh-logo-hd.png");

  try {
    if (fs.existsSync(generatedPath)) {
      const buffer = fs.readFileSync(generatedPath);
      fs.writeFileSync(publicJpg, buffer);
      fs.writeFileSync(publicPng, buffer);
      return NextResponse.json({ success: true, size: buffer.length });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }

  return NextResponse.json({ error: "Source not found" }, { status: 404 });
}
