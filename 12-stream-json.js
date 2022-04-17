const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
	let body = ''
	request.setEncoding('utf8')

	request.on('data', chunk => {
		body += chunk
	})

	request.on('end', () => {
		try {
			const data = JSON.parse(body)
			const log = fs.createWriteStream('info.log')

			response.write(body + '\n')
			response.write(typeof data + '\n')
			response.write(data.toString())
			console.log(data)			
			response.end()

			log.write(body + '\n')
		} catch (e) {
			response.statusCode = 400
			response.end(`error: ${e.message}`)
		}
	})
})

server.listen(1337)
