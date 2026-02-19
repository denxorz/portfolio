import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const inputDirs = [
  path.join(process.cwd(), 'src/assets/projects'),
  path.join(process.cwd(), 'src/assets/other'),
]
const outputDir = path.join(process.cwd(), 'public/assets/projects')
const width = 800 // Desired max width

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Remove all files from the output directory that are not .avif or .svg
for (const file of fs.readdirSync(outputDir)) {
  if (!file.endsWith('.avif') && !file.endsWith('.svg')) {
    fs.unlinkSync(path.join(outputDir, file))
  }
}

for (const inputDir of inputDirs) {
  if (!fs.existsSync(inputDir)) {
    continue
  }
  for (const file of fs.readdirSync(inputDir)) {
    const inputPath = path.join(inputDir, file)
    const baseName = path.parse(file).name
    const ext = path.extname(file).toLowerCase()

    if (ext === '.svg') {
      // Copy SVG as-is
      fs.copyFileSync(inputPath, path.join(outputDir, file))
      console.log(`Copied ${file}`)
      continue
    }

    // Only process raster image files
    if (!/\.(jpe?g|png|webp|avif)$/i.test(file)) {
      continue
    }

    sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .toFormat('avif')
      .toFile(path.join(outputDir, `${baseName}.avif`))
      .then(() => console.log(`Converted and resized ${file} -> ${baseName}.avif`))
      .catch(error => console.error(`Error processing ${file}:`, error))
  }
}
