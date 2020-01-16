const TEST_URL = `http://www.example.com/`;
const TEST_LOCATION = `./index.html`;

const fs = require('fs');
const request = require('request');


const getHTML = function(url, location, callback) {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    callback(body, location);
  });
};

const writeHTML = function(content, location) {
  fs.writeFile(location, content, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
};

let args = process.argv.slice(2);

getHTML(args[0], args[1], writeHTML);