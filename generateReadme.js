// filepath: /path/to/readme-generator/generateReadme.js
function generateREADME(answers) {
    return `
# ${answers.title}
...
`;
}
module.exports = generateREADME;