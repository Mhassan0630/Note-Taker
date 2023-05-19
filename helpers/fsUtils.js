const fs = require('fs');
const util = require('util');

// This function will write data to a file given a file path and data
function writeToFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// This function will read data from a file given a file path
function readFromFile(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

// This function will read from a file, parse the JSON, add a new item to the array, then write the array back to the file
function readAndAppend(filePath, content) {
  const fileData = fs.readFileSync(filePath, 'utf8');
  const dataArray = JSON.parse(fileData);
  dataArray.push(content);
  writeToFile(filePath, dataArray);
}

module.exports = { writeToFile, readFromFile, readAndAppend };

