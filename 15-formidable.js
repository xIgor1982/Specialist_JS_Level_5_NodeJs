const http = require('http')
const formidable = require('formidable')
const fs = require('fs')

const server = http.createServer((req, res) => {
	if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
		// parse a file upload
		const form = formidable({ multiples: true })

		form.parse(req, (err, fields, files) => {
			res.writeHead(200, { 'content-type': 'application/json' })
			res.end(JSON.stringify({ fields, files }, null, 2))

			files.multipleFiles.forEach(file => {
				let oldpath = file.path
				let newpath = 'C:/Users/Admin/Desktop/node-05-10/upload'
				fs.rename(oldpath, newpath + `/` + file.name, err => {
					if (err) throw err
				})
			})
		})

		return
	}

	// show a file upload form
	res.writeHead(200, { 'content-type': 'text/html' })
	res.end(`
    <h2>With Node.js <code>"http"</code> module</h2>
    <form action="/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `)
})

server.listen(8000, () => {
	console.log('Server listening on http://localhost:8000/ ...')
})
