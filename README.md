# node-streams examples

**A simple set of examples** of the basic functionality of streams in Node.js

basicIO.js - Node.js implementation of echo

fileReader.js - simple cat implementation to output the contents of a file and denote chunk changes

charCounter.js - simple character counter which also denotes chunk changes

emojiProcess.js - node process for replacing text file emotion words with emoticons

emojiServer.js - basic Node http server for replacing emotion words with emoticons

leetServer.js - basic Node http server for replacing text with basic leetspeak

Input files:
emotions.txt - a short file with a few emotion words to be replaced by emojiProcess or emojiServer
shorthipster.txt - a short chunk of <a href="https://hipsum.co/">hipster ipsum</a>
longhipster.txt - a longer chunk of hipster ipsum that should result in at least 2 chunks when read from a stream