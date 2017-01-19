# node-streams examples

**A simple set of examples** of the basic functionality of streams in Node.js

**basicIO.js** - Node.js implementation of echo
- usage: `node basicIO.js`

**fileReader.js** - simple cat implementation to output the contents of a file and denote chunk changes
- usage: `node fileReader.js <filepath>`

**charCounter.js** - simple character counter which also denotes chunk changes
- usage: `node charCounter.js <filepath>`

**emojiProcess.js** - node process for replacing text file emotion words with emoticons
- usage: `node emojiProcess.js <filepath> <[fs stdout]>`

**emojiServer.js** - basic Node http server for replacing emotion words with emoticons
- usage: start server with node `emojiServer.js <port#>`, make `POST` requests to `port`

**leetServer.js** - basic Node http server for replacing text with basic leetspeak
- usage: start server with node `leetServer.js <port#>`, make `POST` requests to `port`

**Input files:**
- emotions.txt - a short file with a few emotion words to be replaced by emojiProcess or emojiServer
- shorthipster.txt - a short chunk of <a href="https://hipsum.co/">hipster ipsum</a>
- longhipster.txt - a longer chunk of hipster ipsum that should result in at least 2 chunks when read from a stream

Repo created to accompany a tech talk at <a href="https://www.fullstackacademy.com/">Fullstack Academy January 2017</a>

Interactive slides can be viewed on <a href="https://ianmunrobot.github.io/node-streams-examples/">Github Pages</a>