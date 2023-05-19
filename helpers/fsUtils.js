const fs = require('fs');
const util = require('util');

// This function will write data to a file given a directory and data
function writeToFile(directory, data) {
  fs.writeFileSync(directory, JSON.stringify(data, null, 4));
}

// This function will read data from a file given a directory
function readFromFile(directory) {
  return fs.readFileSync(directory, 'utf8');
}

// This function will read from a file, parse the JSON, add a new item to the array, then rewrite the array back to the file
function readAndAppend(content, file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
}

module.exports = { readFromFile, writeToFile, readAndAppend };
