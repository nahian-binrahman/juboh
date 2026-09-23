import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "juboh-logo.png");
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const buf = fs.readFileSync(filePath);
  // PNG width & height are at offset 16 and 20 (4 bytes each, big endian)
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);

  return NextResponse.json({
    width,
    height,
    size: buf.length,
    aspectRatio: (width / height).toFixed(2),
  });
}
