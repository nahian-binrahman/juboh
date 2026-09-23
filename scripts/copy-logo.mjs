import fs from 'fs';
import path from 'path';

const srcPath = 'C:/Users/Nahian- PC/.gemini/antigravity-ide/brain/b04be6b6-848f-411c-99f2-3a119b4b1b89/.user_uploaded/media_1790120058179.png';
const destPath = 'c:/jalenuboh/public/juboh-logo.png';

try {
  fs.copyFileSync(srcPath, destPath);
  console.log('Successfully copied to', destPath);
} catch (err) {
  console.error('Error copying:', err);
}
