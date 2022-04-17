let http = require('http')
let app = http.createServer().listen(5500)
app.on('request', (request, response) => {
	response.statusCode = 200
	response.writeHead(200, {
		'Content-Type': 'text/html; charset=utf-8',
	})
	response.write('<h1>Привет, мир!<h1>')
	response.end('<footer>Подвал</footer>')
})
app.on('listening', (request, response) => {
	console.log('Listening.....')
})
app.on('request', (request, response) => {
	console.log('Request: ', request.method, request.url)
	console.log('Response: ', response.statusCode)
})
