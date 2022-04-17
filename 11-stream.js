let fs = require('fs')
let file = fs.createReadStream('test.txt')
let newFile = fs.createWriteStream('test2')
file.pipe(newFile)
