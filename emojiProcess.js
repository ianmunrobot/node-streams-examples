#! /usr/bin/env node

// simple node process for replacing text file emotion words with emoticons
// outputs to a file 'output.txt' or to stdout
// usage: node emojiProcess.js <filepath> <[fs stdout]>

const fs = require('fs');
const through = require('through2');

// handle usage errors
function usageError() {
  console.log(' ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒')
  console.log(' ▒ Usage:                             ▒')
  console.log(' ▒ emoji-process filepath [fs stdout] ▒')
  console.log(' ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒ ▒')
  process.exit(0)
}

// check for correct arguments length
if (process.argv.length !== 4) {
  usageError()
}


const filepath = process.argv[2];
const readFile = fs.createReadStream(filepath);

const stream = through(write, end);

function write(buffer, encoding, next) {
  let text = buffer.toString()
  text = text.replace(/happy/gi, ':)');
  text = text.replace(/sad/gi, ':(');
  this.push(text);
  next();
}

function end(done) {
  process.exit(0)
  done();
}

output = process.argv[3]

if (output === 'stdout')
{
  process.stdin
    .pipe(readFile)
    .pipe(stream)
    .pipe(process.stdout)
} else if (output ==='fs') {
  let outputFile = fs.createWriteStream(__dirname + '/outputfile.txt')
  process.stdin
    .pipe(readFile)
    .pipe(stream)
    .pipe(outputFile)
} else {
  usageError()
}

