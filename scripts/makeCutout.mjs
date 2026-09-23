import sharp from 'sharp';

async function main() {
  const inputPath = 'C:\\Users\\Nahian- PC\\.gemini\\antigravity-ide\\brain\\6ce899cd-11c0-4705-b052-cd4b137a5976\\jalen_greenscreen_1790167273426.jpg';
  const outputPath = 'c:\\jalenuboh\\public\\jalen-uboh-cutout.png';

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Processing greenscreen: ${width}x${height}`);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Standard chroma key green difference
    // In pure green: g is much higher than r and b
    const maxOther = Math.max(r, b);
    const greenDiff = g - maxOther;

    if (greenDiff > 35) {
      // Background green
      data[i + 3] = 0;
    } else if (greenDiff > 5) {
      // Semi-transparent edge transition
      const alphaFactor = 1 - (greenDiff - 5) / 30;
      data[i + 3] = Math.round(255 * Math.max(0, Math.min(1, alphaFactor)));
      // Despill: clamp green channel to avoid green fringe
      data[i + 1] = maxOther;
    } else {
      // Foreground
      data[i + 3] = 255;
      // Minor despill if slight green tint on edge hairs
      if (g > maxOther) {
        data[i + 1] = maxOther;
      }
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
    .png({ quality: 100, compressionLevel: 8 })
    .toFile(outputPath);

  console.log(`Saved pristine cutout to ${outputPath}`);
}

main().catch(console.error);
