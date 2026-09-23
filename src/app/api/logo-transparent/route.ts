import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import zlib from "zlib";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "juboh-logo.png");
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Original logo not found" }, { status: 404 });
  }

  try {
    const buf = fs.readFileSync(filePath);

    // Parse PNG chunks
    let offset = 8;
    let width = 0;
    let height = 0;
    let bitDepth = 0;
    let colorType = 0;
    const idatBuffers: Buffer[] = [];

    while (offset < buf.length) {
      const length = buf.readUInt32BE(offset);
      const type = buf.toString("ascii", offset + 4, offset + 8);
      const data = buf.subarray(offset + 8, offset + 8 + length);

      if (type === "IHDR") {
        width = data.readUInt32BE(0);
        height = data.readUInt32BE(4);
        bitDepth = data[8];
        colorType = data[9];
      } else if (type === "IDAT") {
        idatBuffers.push(data);
      }

      offset += 12 + length;
    }

    const compressed = Buffer.concat(idatBuffers);
    const decompressed = zlib.inflateSync(compressed);

    // Output RGBA buffers:
    // 1) Transparent dark logo (for light bg)
    // 2) Transparent white/gold logo (for dark bg)
    const bytesPerPixel = colorType === 6 ? 4 : colorType === 2 ? 3 : colorType === 0 ? 1 : 4;
    const stride = 1 + width * bytesPerPixel;
    const outStride = 1 + width * 4;

    const outWhiteDecomp = Buffer.alloc(height * outStride);
    const outDarkDecomp = Buffer.alloc(height * outStride);

    for (let y = 0; y < height; y++) {
      const inRowStart = y * stride;
      const outRowStart = y * outStride;

      // Filter byte (0 = None)
      const filterType = decompressed[inRowStart];
      outWhiteDecomp[outRowStart] = filterType;
      outDarkDecomp[outRowStart] = filterType;

      for (let x = 0; x < width; x++) {
        let r = 0, g = 0, b = 0, a = 255;
        if (bytesPerPixel === 4) {
          const idx = inRowStart + 1 + x * 4;
          r = decompressed[idx];
          g = decompressed[idx + 1];
          b = decompressed[idx + 2];
          a = decompressed[idx + 3];
        } else if (bytesPerPixel === 3) {
          const idx = inRowStart + 1 + x * 3;
          r = decompressed[idx];
          g = decompressed[idx + 1];
          b = decompressed[idx + 2];
          a = 255;
        } else if (bytesPerPixel === 1) {
          const idx = inRowStart + 1 + x;
          const val = decompressed[idx];
          r = g = b = val;
        }

        // Calculate lightness (0 black, 255 white)
        const luma = 0.299 * r + 0.587 * g + 0.114 * b;
        
        // For transparent version: if pixel is bright white background, alpha = 0
        // Soft antialiasing for text edges
        const textOpacity = Math.max(0, Math.min(255, Math.round((255 - luma) * 1.05)));

        const outIdx = outRowStart + 1 + x * 4;

        // White logo (for dark navbar)
        outWhiteDecomp[outIdx] = 255;     // R
        outWhiteDecomp[outIdx + 1] = 255; // G
        outWhiteDecomp[outIdx + 2] = 255; // B
        outWhiteDecomp[outIdx + 3] = textOpacity;

        // Dark transparent logo (for light bg)
        outDarkDecomp[outIdx] = 18;       // R
        outDarkDecomp[outIdx + 1] = 24;   // G
        outDarkDecomp[outIdx + 2] = 36;   // B
        outDarkDecomp[outIdx + 3] = textOpacity;
      }
    }

    // Helper to build a valid PNG file buffer
    function buildPng(rawDecomp: Buffer, w: number, h: number): Buffer {
      const comp = zlib.deflateSync(rawDecomp);

      const ihdr = Buffer.alloc(13);
      ihdr.writeUInt32BE(w, 0);
      ihdr.writeUInt32BE(h, 4);
      ihdr[8] = 8; // bit depth
      ihdr[9] = 6; // RGBA
      ihdr[10] = 0; // compression
      ihdr[11] = 0; // filter
      ihdr[12] = 0; // interlace

      function chunk(name: string, data: Buffer): Buffer {
        const len = data.length;
        const b = Buffer.alloc(12 + len);
        b.writeUInt32BE(len, 0);
        b.write(name, 4, 4, "ascii");
        data.copy(b, 8);
        const crc = crc32(b.subarray(4, 8 + len));
        b.writeInt32BE(crc, 8 + len);
        return b;
      }

      // Quick CRC-32
      function crc32(buf: Buffer): number {
        let c = 0xffffffff;
        for (let i = 0; i < buf.length; i++) {
          c ^= buf[i];
          for (let j = 0; j < 8; j++) {
            c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
          }
        }
        return (c ^ 0xffffffff) | 0;
      }

      const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
      const ihdrChunk = chunk("IHDR", ihdr);
      const idatChunk = chunk("IDAT", comp);
      const iendChunk = chunk("IEND", Buffer.alloc(0));

      return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
    }

    const whitePng = buildPng(outWhiteDecomp, width, height);
    const darkPng = buildPng(outDarkDecomp, width, height);

    fs.writeFileSync(path.join(process.cwd(), "public", "juboh-logo-white.png"), whitePng);
    fs.writeFileSync(path.join(process.cwd(), "public", "juboh-logo-dark.png"), darkPng);

    return NextResponse.json({
      success: true,
      whiteLogoSize: whitePng.length,
      darkLogoSize: darkPng.length,
      width,
      height,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
