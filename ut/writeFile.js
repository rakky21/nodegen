const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

function writeFile(data) {
    fs.writeFile('README.md', generateMarkdown(data), function(err) {
    if (err) {
        return console.log(err);
    }
    });
}

module.exports = writeFile;