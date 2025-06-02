module.exports = {
  logMessage: (message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  },

  processData: (data) => {
    // Example function to process data
    return data.map(item => item.toUpperCase());
  },

  readFileAsync: (filePath) => {
    const fs = require('fs').promises;
    return fs.readFile(filePath, 'utf-8');
  },

  writeFileAsync: (filePath, data) => {
    const fs = require('fs').promises;
    return fs.writeFile(filePath, data, 'utf-8');
  }
};