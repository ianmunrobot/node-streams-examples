// readable process.stdin is directly echoed back to process.stdout

process.stdin.pipe(process.stdout)