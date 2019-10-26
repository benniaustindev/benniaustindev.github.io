/* eslint-disable no-console */

const fs = require('fs');
const moment = require('moment');
const officegen = require('officegen');
const resume = require('../resume.json');

const docx = officegen({
  type: 'docx',
  orientation: 'portrait',
  pageMargins: {
    top: 1000, left: 1000, bottom: 1000, right: 1000,
  },
});
docx.on('finalize', () => console.log('Build complete: GenerateDoc.'));
docx.on('error', (err) => console.error(`generateDoc ${err}`));

const styles = {
  text: {
    font_size: 9,
  },
  header: {
    font_size: 14,
    bold: true,
    color: '00ab44',
  },
};
function createHeader() {
  const p = docx.createP({ align: 'left' });
  p.addText(resume.name, {
    bold: true,
    font_size: 30,
  });
  p.addLineBreak();
  p.addText(resume.title, {
    font_size: 18,
    color: '00ab44',
  });
  p.addLineBreak();
  p.addText(resume.email, {
    ...styles.text,
    color: '666666',
  });
  p.addLineBreak();
  return p;
}

let p = createHeader();
p = docx.createP();
p.addText('OBJECTIVE', styles.header);
p = docx.createP();
p.addText(resume.objective, styles.text);
p.addLineBreak();

p = docx.createP();
p.addText('SKILLS', styles.header);
p = docx.createP({ margins: { top: 0 } });
resume.skills.forEach((skill) => {
  p.addText(`• ${skill}`, styles.text);
  p.addLineBreak();
});

p = docx.createP();
p.addText('Professional Experience', styles.header);
resume.experience.forEach((employer, i) => {
  const {
    company, start, end, title, responsibilities,
  } = employer;
  const dateRange = `${moment(start).format('MMM YY')} - ${end ? moment(end).format('MMM YYYY') : 'Present'}`;
  p = docx.createP();
  p.addText(`${company} `, { ...styles.text, bold: true, font_size: 14 });
  p.addLineBreak();
  p.addText(`(${dateRange})`, { ...styles.text, color: '666666' });
  p.addLineBreak();
  p.addText(title, { font_size: 12 });
  p = docx.createP();
  responsibilities.forEach((responsibility) => {
    p.addText(`• ${responsibility}`, styles.text);
    p.addLineBreak();
  });
  if (i === 0) {
    docx.putPageBreak();
    p = createHeader();
  }
});


const out = fs.createWriteStream('Benjamin-Austin-Resume.docx');

out.on('error', (err) => {
  console.log(err);
});

docx.generate(out);
