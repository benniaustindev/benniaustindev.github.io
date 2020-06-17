const fs = require('fs');
const moment = require('moment');
const _ = require('lodash');
const resume = require('../resume.json');


const result = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
    <meta name="format-detection" content="telephone=no">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
    <!-- <link rel="stylesheet/less" type="text/css" href="less/styles.less" /> -->
    <!-- <script src="less.js" type="text/javascript"></script> -->
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script type="text/javascript" src="index.js"></script>
    <title>Benni Austin</title>
  </head>
  <body>
    <header>
      <hgroup>
        <h1>${resume.name}</h1>
        <h2>${resume.title}</h2>
      </hgroup>
    </header>
    <nav>
      <a href="#technologies"><i class="fas fa-code"></i>Technologies</a>
      <a href="#skills"><i class="fas fa-award"></i>Skills</a>
      <a href="#experience"><i class="fas fa-clock"></i>Experience</a>
      <a href="#contact"><i class="fas fa-address-book"></i>Contact</a>
    </nav>
    <main>
      <section id="objective">
        <p>${resume.objective}</p>
      </section>
      <section id="technologies">
        <h2>Technologies</h2>
        <ul>
          <li>
            <button class="active"><i class="fab fa-html5"></i><em>HTML 5</em></button>
            <p>Proficient in the use of modern technologies to create beautiful web applications.</p>
          </li>
          <li>
            <button><i class="fab fa-css3"></i><em>CSS 3</em></button>
            <p>Benni is CSS expert, who loves SCSS, Animations/Transitions, Responsive techniques.</p>
          </li>
          <li>
            <button><i class="fab fa-js"></i><em>Javascript</em></button>
            <p>Benni is very comfortable with Javascript, ES6, React, Backbone, Angular, Node, Jquery, Prototype, etc...</p>
          </li>
          <li>
            <button><i class="fas fa-cookie-bite"></i><em>Local Storage</em></button>
            <p>Benni has familiarity with indexedDB and webSQL, localstorage, as well as traditional cookie based storage, as well as Loki.js.</p>
          </li>
          <li>
            <button><i class="fab fa-git"></i><em>Version Control</em></button>
            <p>Benni can keep everything in order within multiple version control systems, including SVN, GIT and TFS.</p>
          </li>
        </ul>
      </section>
      <section id="skills">
        <h2>Benni's Skills</h2>
        <ul>
          ${resume.skills.map((skill) => `<li>${skill}</li>`).join('\n')}
        </ul>
      </section>
      <section id="experience">
        <h2>Benni's Professional Experience</h2>
        ${resume.experience.map((employer) => {
    const {
      company, start, end, title, responsibilities,
    } = employer;
    const dateRange = `${moment(start).format('MMMM YYYY')} - ${end ? moment(end).format('MMMM YYYY') : 'Present'}`;
    return `
            <section>
              <hgroup>
                <h2><i class="icon ${_.camelCase(company)}"></i>${company}</h2>
                <h3>${title}</h3>
                <h3>${dateRange}</h3>
              </hgroup>
              <ul>
                ${responsibilities.map((responsibility) => `<li>${responsibility}</li>`).join('\n')}
              </ul>
            </section>
          `;
  }).join('\n')}
      </section>
    </main>
    <footer id="contact">
      <h2>Contact Benni Austin</h2>
      <ul class="contact">
        <li><a href="tel:651-424-2569"><i class="fas fa-mobile-alt"></i> : 651-424-2569</a></li>
        <li><a href="mailto:benniaustindev@gmail.com"><i class="fas fa-envelope"></i> : benniaustindev@gmail.com</a></li>
        <li><a href="https://github.com/benniaustindev/"><i class="fab fa-github"></i> : github.com/benniaustindev/</a></li>
        <li><a href="https://www.linkedin.com/in/benni-austin/"><i class="fab fa-linkedin"></i> : linkedin.com/in/benni-austin/</a></li>
        <li><a href="Benjamin-Austin-Resume.pdf"><i class="fas fa-file-pdf"></i> : Benni's Resume</a></li>
      </ul>
    </footer>
  </script>
</html>`;

fs.writeFileSync('index.htm', result, 'ascii');
