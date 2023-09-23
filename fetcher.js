// a node app that will download a resource at a given URL, and save it to a local path on your machine.
// if download is good and completed, log the success and size (in bytes)


const fs = require('fs');
const request = require('request');
const URL = process.argv[2];
const file = process.argv[3];

request.get(URL, function (error, response, body) {
  if (!URL || !file) {
    console.log("Please enter a valid URL and filepath and run again.")
    process.exit();
  }
  if (response.statusCode !== 200) {
    console.log("Couldn't access URL, check and run again.")
    process.exit()
  }
  fs.stat(file, function (err) {
    if (err === null) {
      const { size } = fs.statSync(file)
      console.log(`Downloaded and saved ${size} bytes to ${file}`)
    };
  })
})