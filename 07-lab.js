const http = require('http')
const fs = require('fs')

const fn = (req, res) => {
	if (req.url === '/download') {
		console.log(`download...`)

		const file = 'test.txt'
		fs.stat(file, (err, stats) => {
			if (err) throw err

			fs.readFile(file, (error, txt) => {
				const body = txt.toString()

				res.writeHead(200, {
					'Content-Length': Buffer.byteLength(body),
					'Content-Type': 'text/html; charset=UTF-8',
					'Content-Disposition': 'attachment; filename="download.html"',
				})
				res.write(body)
				res.end()
			})
		})

		return
	}

	const index = '07-index.html'

	fs.stat(index, (err, stats) => {
		if (err) throw err

		fs.readFile(index, (error, txt) => {
			const body = txt.toString()

			res.writeHead(200, {
				'Content-Length': Buffer.byteLength(body),
				'Content-Type': 'text/html; charset=UTF-8',
			})
			res.write(body)
			res.end()
		})
	})
}

const PORT = 8001

const app = http.createServer(fn)
app.listen(PORT)
console.log(`Listening... port ${PORT}`)
