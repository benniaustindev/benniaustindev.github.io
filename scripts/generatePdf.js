const libre = require('libreoffice-convert');

const path = require('path');
const fs = require('fs');

const extend = '.pdf';
const enterPath = path.join(__dirname, '../Benjamin-Austin-Resume.docx');
const outputPath = path.join(__dirname, `../Benjamin-Austin-Resume${extend}`);

// Read file
const file = fs.readFileSync(enterPath);
// Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
libre.convert(file, extend, undefined, (err, done) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(`Error converting file: ${err}`);
  }

  // Here in done you have pdf file which you can save or transfer in another stream
  fs.writeFileSync(outputPath, done);
  // eslint-disable-next-line no-console
  console.log('generate Benjamin-Austin-Resume.pdf complete');
});
