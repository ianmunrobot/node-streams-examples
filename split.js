const split = require('split');
const fs = require('fs')
const through = require('through2')

fs.createReadStream('files/emotions.txt')
  .pipe(split())
  .pipe(through(function(chunk, _, next) {
    this.push(`---${chunk.toString()}---\n`)
    next()
  }))
  .pipe(process.stdout)


  const through = require('through2')

  const stream = through(function(chunk, encoding, next) {
    this.push('---' + chunk.toString() + '---')
    next()
  })

  readableStream
  .pipe(through)
  .pipe(writeableStream)

