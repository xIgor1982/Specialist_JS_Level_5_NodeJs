const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', function (request, response) {
	response.writeHead(200)
	let newFile = fs.createWriteStream('test2.txt')
	request.pipe(newFile)

	request.on('end', () => {
		response.end('Файл загружен')
	})

	request.on('data', function (chunk) {
		chunk = `\nНовая часть:\n${chunk}`
		newFile.write(chunk)
	})
})

server.listen(5555)
