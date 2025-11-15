const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.resolve(__dirname, '..', 'imggallery', 'Private Chef and Catering Services _ The Anatolian Table.pdf');
const outDir = path.resolve(__dirname, '..', 'data');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const dataTxtPath = path.join(outDir, 'pdf_raw.txt');
const dataTsPath = path.join(outDir, 'pdf_content.ts');

fs.readFile(pdfPath, (err, buffer) => {
  if (err) {
    console.error('Failed to read PDF:', err);
    process.exit(1);
  }
  pdf(buffer).then(function(data) {
    const text = data.text || '';
    fs.writeFileSync(dataTxtPath, text, 'utf8');
    const safeText = text.replace(/`/g, '\\`');
    const ts = `// Auto-generated from PDF extraction\nexport const pdfText = ` + '`' + `${safeText}` + '`' + `;\n`;
    fs.writeFileSync(dataTsPath, ts, 'utf8');
    console.log('Wrote', dataTxtPath);
    console.log('Wrote', dataTsPath);
  }).catch((e) => {
    console.error('PDF parse error:', e);
    process.exit(1);
  });
});
