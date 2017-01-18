#! /usr/bin/env node

const fs = require('fs');
const through = require('through2');

function usage() {
  console.log(' ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
  console.log(' emoji-process.js USAGE:')
  console.log(' emoji-process filepath')
  console.log(' ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
  process.exit(1)
}

if (process.argv.length !== 3) {
  usage()
}


const filepath = process.argv[2];
const readFile = fs.createReadStream(filepath);

const stream = through(write, end);

function write(buffer, encoding, next) {
  let text = buffer.toString()
  text = text.replace('happy', ':)');
  text = text.replace('sad', ':(');
  this.push(text);
  next();
}

function end(done) {
  process.exit(0)
  done();
}

process.stdin
  .pipe(readFile)
  .pipe(stream)
  .pipe(process.stdout)

