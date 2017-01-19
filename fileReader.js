// simple cat clone to output the contents of a file and denote chunk changes
// usage: node fileReader.js <filepath>

const http = require('http');
const fs = require('fs');

if (process.argv.length !== 3) {
  console.log('file path required');
  process.exit(1)
}

const filepath = process.argv[2]

var readStream = fs.createReadStream(filepath)

readStream.on('data', (chunk) => {
  console.log(' ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
  console.log(' ▒ reading chunk...  ▒');
  console.log(' ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
  console.log(chunk.toString());
})