import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.join(process.cwd(), 'src/assets/projects');
const outputDir = path.join(process.cwd(), 'public/assets/projects');
const width = 800; // Desired max width

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Remove all files from the output directory that are not .avif or .svg
fs.readdirSync(outputDir).forEach(file => {
  if (!file.endsWith('.avif') && !file.endsWith('.svg')) {
    fs.unlinkSync(path.join(outputDir, file));
  }
});

fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);
  const baseName = path.parse(file).name;
  const ext = path.extname(file).toLowerCase();

  if (ext === '.svg') {
    // Copy SVG as-is
    fs.copyFileSync(inputPath, path.join(outputDir, file));
    console.log(`Copied ${file}`);
    return;
  }

  // Only process raster image files
  if (!/\.(jpe?g|png|webp|avif)$/i.test(file)) return;

  sharp(inputPath)
    .resize({ width, withoutEnlargement: true })
    .toFormat('avif')
    .toFile(path.join(outputDir, `${baseName}.avif`))
    .then(() => console.log(`Converted and resized ${file} -> ${baseName}.avif`))
    .catch(err => console.error(`Error processing ${file}:`, err));
});
