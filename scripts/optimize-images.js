const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'img');
const OUT_DIR = path.join(SRC_DIR, 'optimized');

if (!fs.existsSync(SRC_DIR)) {
  console.error('img folder not found:', SRC_DIR);
  process.exit(1);
}
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const input = path.join(SRC_DIR, file);
  try {
    // create webp (max width 1600)
    await sharp(input).resize({ width: 1600 }).webp({ quality: 80 }).toFile(path.join(OUT_DIR, name + '.webp'));
    // create thumbnail jpg (400px)
    await sharp(input).resize({ width: 400 }).jpeg({ quality: 72 }).toFile(path.join(OUT_DIR, name + '_thumb.jpg'));
    console.log('Optimized:', file);
  } catch (err) {
    console.error('Error optimizing', file, err.message);
  }
}

(async ()=>{
  const files = fs.readdirSync(SRC_DIR).filter(f=>/[.](jpe?g|png|webp)$/i.test(f));
  for (const f of files) await processFile(f);
  console.log('Done. Optimized images are in', OUT_DIR);
})();
