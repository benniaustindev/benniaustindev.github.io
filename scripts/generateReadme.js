const fs = require('fs');
const moment = require('moment');
const resume = require('../resume.json');


const result = `# ${resume.name}
### ${resume.title}
#### ${resume.email}

## Objective

${resume.objective}

## Skills And Technologies

${resume.skills.map((skill) => `* ${skill}`).join('\n')}

## Professional experience

${resume.experience.map((employer) => {
    const {
      company, start, end, title, responsibilities,
    } = employer;
    const dateRange = `${moment(start).format('MMMM YYYY')} - ${end ? moment(end).format('MMMM YYYY') : 'Present'}`;
    return `### ${company}
_${dateRange}_
**${title}**
${responsibilities.map((responsibility) => `* ${responsibility}`).join('\n')}
`;
  }).join('\n')}`;

fs.writeFileSync('README.md', result, 'ascii');
// eslint-disable-next-line no-console
console.log('generate README.md complete');
