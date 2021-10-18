const fs = require('fs');
function generateMarkdown(data) {
    return `# ${data.title}
    ##Description
    ${data.description}
    ##Contact
    https://github.com/${data.username}
    ##License
    ${data.license}
    `;
}

function writeFile(data) {
    fs.writeFile('README.md', generateMarkdown(data), function(err) {
    if (err) {
        return console.log(err);
    }
    });
}

module.exports = {writeFile};