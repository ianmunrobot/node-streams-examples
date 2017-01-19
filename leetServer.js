// simple server for replacing text with basic leetspeak
// usage: start file with node emojiServer.js <port#>
// post text files to localhost:port, responses will include the transformed data

const http = require('http');
const map = require('through2-map');

var port = process.argv[2];

var server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('must be POST\n');
  }

  req.pipe(map(chunk => {
    let text = chunk.toString();
    text = text.split('').map(char => {
      char = char.toLowerCase()
      return alphabet[char] ? alphabet[char] : char
    }).join('');
    return text;
  })).pipe(res);

  req.on('error', function(err) {
    res.end(err);
  })

})
.listen(port);

var alphabet = {
  a: '4',
  b: 'b',
  c: '¢',
  d: 'd',
  e: '3',
  f: 'f',
  g: '6',
  h: 'h',
  i: '1',
  j: 'j',
  k: '|<',
  l: '|',
  m: 'm',
  n: 'n',
  o: '0',
  p: 'p',
  q: 'q',
  r: 'r',
  s: '5',
  t: '7',
  u: '[_]',
  v: '\\/',
  w: 'w',
  x: 'x',
  y: 'y',
  z: '2',
};