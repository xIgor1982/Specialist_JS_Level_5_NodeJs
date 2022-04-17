const http = require('http')

const fn = (req, res) => {
	// res.writeHead(200);
	// res.write('Hello World');
	// res.end('\nserver end');

	res.statusCode = 200
	// res.setHeader('Content-Type', 'text/plain')
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	res.end('Hello World\n')
}

const app = http.createServer(fn)
app.listen(5000)
console.log('Listening... port: 5000')