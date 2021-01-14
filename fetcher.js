const args = process.argv.slice(2); // slices those first two elements of the array
const path = args[1] // assigns variable to args[1] which is my specified path

const request = require('request'); // requiring http request
const fs = require('fs'); //requiring filesystem from node

request(args[0], (error, response, body) => { // request function for the URL i input on CLA
  fs.writeFile(path, body, (error) => { // file writing, this im confused on, got some outside help from Gabe
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`) // what i want to log to console afterwards
  })
});


