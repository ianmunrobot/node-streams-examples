// simple server for replacing emotion words with emoticons
// usage: start file with node emojiServer.js <port#>
// post text files to localhost:port, responses will include the transformed data

const http = require('http')
const map = require('through2-map')

if (process.argv.length !== 3) {
  console.log('Please provide a port number');
  process.exit(1)
}

var port = process.argv[2]

var server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('must be POST\n');
  }

  req.pipe(map(chunk => {
    let text = chunk.toString()
    text = text.replace(/happy/gi, ':)');
    text = text.replace(/sad/gi, ':(');
    text = text.replace(/meh/gi, ':|');
    text = text.replace(/shrug/gi, '¯\\_(ツ)_/¯');

    return text
  })).pipe(res);

  req.on('error', function(err) {
    res.end(err)
  })

})
.listen(port)