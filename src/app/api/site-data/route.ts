import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { defaultSiteData } from "@/context/defaultSiteData";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "siteData.json");

function ensureDirectoryExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export async function GET() {
  try {
    ensureDirectoryExists();
    if (fs.existsSync(DATA_FILE)) {
      const fileData = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(fileData);
      return NextResponse.json(parsed);
    }
    return NextResponse.json(defaultSiteData);
  } catch (error) {
    console.error("Error reading site data:", error);
    return NextResponse.json(defaultSiteData);
  }
}

export async function POST(req: NextRequest) {
  try {
    ensureDirectoryExists();
    const updatedData = await req.json();
    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedData, null, 2), "utf-8");
    return NextResponse.json({ success: true, message: "Site data saved successfully" });
  } catch (error) {
    console.error("Error saving site data:", error);
    return NextResponse.json({ success: false, error: "Failed to write site data" }, { status: 500 });
  }
}
