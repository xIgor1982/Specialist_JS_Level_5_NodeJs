const express = require('express')
// const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const app = express()

const PORT = 8888

// app.set('views', __dirname)
// app.set('view engine', 'ejs')
app.use((req, res, next) => {
	console.log('Время: ', Date.now())
	next()
})

app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', __dirname)
app.set('view engine', 'pug')

app.listen(PORT, () => [console.log(`Сервер запущен на порту ${PORT}...`)])

const books = {
	1234: { title: 'Приключения' },
	2234: { title: 'Фантастика' },
}

app.get('/:name', function (request, response) {
	const name = request.params.name
	response.render('template', {
		name,
		title: 'Hello world!',
	})
	response.end()
})

app.get('/book/:id', (req, res) => {
	let title = ''
	if (books.has(req.params.id)) {
		title = books.get(req.params.id).title
	} else {
		title = 'Не найдено'
	}
	res.render('book', { title: title, id: req.params.id })
	res.end()
})

//********************************************** */

// app.get('/', (req, res) => {
// 	//res.send(__dirname);

// 	res.detachSocket({
// 		'Content-Type': 'text/plain',
// 		'Content-Length': '123',
// 		ETag: '12345',
// 	})

// 	res.sendFile(__dirname + '\\test.html')
// })

// app.post('/', (req, res) => {
// 	res.send('POST request')
// })

// app.get('/price', (req, res) => {
// 	//res.send(__dirname);
// 	res.download('report-12345.pdf', 'price.pdf', error => {})
// })

// app.get('/users', (req, res) => {
// 	//res.send(__dirname);
// 	res.json([{ name: 'John' }])
// })

// app.get('/user', (req, res) => {
// 	res.redirect('/users')
// })

// app.put('/user', (req, res) => {
// 	res.send('отправлен PUT-запрос на /user')
// })

// app.delete('/user', (req, res) => {
// 	res.send('отправлен DELETE-запрос на /user')
// })
// // app.all('/secret', (req, res, next) => {
// // 	console.log('Доступ к секретной секции ...')
// // 	next()
// // })
// app.get(/.*fly$/, (req, res) => {
// 	res.send('/.*fly$/')
// })

// app
// 	.route('/book')
// 	.get((req, res) => {
// 		res.send('Book - get')
// 	})
// 	.post((req, res) => {
// 		res.send('Add book - post')
// 	})
// 	.put((req, res) => {
// 		res.send('Update book - put')
// 	})

// let books = {
// 	1234: { title: 'Приключения' },
// 	2234: { title: 'Фантастика' },
// }

// app.get('/book/:id', (req, res) => {
// 	if (req.params.id in books) {
// 		let title = books[req.params.id].title
// 		res.write(title)
// 	} else {
// 		res.write('Не найдено')
// 	}
// 	res.end()
// })
