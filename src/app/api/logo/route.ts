import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const userUploadPath = "C:/Users/Nahian- PC/.gemini/antigravity-ide/brain/b04be6b6-848f-411c-99f2-3a119b4b1b89/.user_uploaded/media_1790120058179.png";
  const publicDest = path.join(process.cwd(), "public", "juboh-logo.png");

  try {
    if (fs.existsSync(userUploadPath)) {
      const buffer = fs.readFileSync(userUploadPath);
      // Also ensure it is copied to public folder for direct static serving
      try {
        if (!fs.existsSync(publicDest)) {
          fs.writeFileSync(publicDest, buffer);
        }
      } catch (copyErr) {
        console.warn("Could not copy to public:", copyErr);
      }

      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
  } catch (err) {
    console.error("Error reading logo:", err);
  }

  return new NextResponse("Not found", { status: 404 });
}
