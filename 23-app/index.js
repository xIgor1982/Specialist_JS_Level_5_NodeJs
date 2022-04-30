const app = require('express')
const http = require('http').createServer(app)
const io = require('socket.io')(http);

const PORT = 8004;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

io.on('connection', client => {
	console.log('подключено...')
	client.on('message', data => {
		console.log(data)
	})
	client.emit('message', 'hello!')
})

http.listen(PORT, () => {
	console.log(`server started port ${PORT}...`)
})