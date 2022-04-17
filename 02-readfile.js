const fs = require('fs')

fs.readFile('test.txt', (error, txt) => {
	console.log(txt.toString(), 2)
})

console.log(fs.readFileSync('test.txt', 'utf8'), 1)