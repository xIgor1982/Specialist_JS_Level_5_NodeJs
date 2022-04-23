const express = require('express')
const bodyParser = require('body-parser')
const json_xml = require('json_xml')
const fetch = require('node-fetch')

const PORT = 4444

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('form-currency')
	res.end()
})

app.post('/', (req, res) => {
	const currency = req.body.currency

	let dt = new Date()
	const date = `${dt.getDate()}/${dt.getMonth()}/${dt.getFullYear()}`
	console.log('Текущая дата:', date)
	const url = `http://www.cbr.ru/scripts/XML_daily.asp?date_req=${date}`

	fetch(url)
		.then(res => res.text())
		.then(text => {
			const courses = json_xml.xml2json(text)
			let value

			res.render('index', { currency: value, courses })
			res.end()
		})
		.catch(err => console.log(err))
})

// app.get('/:currency', (req, res) => {
// 	let currency = req.params.currency

// 	let date = new Date().toLocaleDateString().replace(/\./g, '/')

// 	let url = `http://www.cbr.ru/scripts/XML_daily.asp?date_req=${date}`

// 	fetch(url)
// 		.then(res => res.text())
// 		.then(body => {
// 			let jsonObj = json_xml.xml2json(body)
// 			let { ValCurs } = jsonObj
// 			let { Valute } = ValCurs

// 			let result = ''
// 			for (let p in Valute) {
// 				if (Valute[p]['CharCode'].toLowerCase() === currency.toLowerCase()) {
// 					result = Valute[p]['Value']
// 					break
// 				}
// 			}

// 			console.log(result)

// 			//res.send(body)
// 			res.render('form-currency', { currency, result })
// 			res.end()
// 		})
// })

// app.get('/api', (req, res) => {
// 	res.json({ name: 'John' })
// })

// app.get('/specialist', (req, res) => {
// 	fetch('http://localhost:8000/course', {
// 		method: 'post',
// 		body: JSON.stringify({ qwerty: 123 }),
// 		headers: { 'Content-Type': 'application/json' },
// 	})
// 		.then(res => res.text())
// 		.then(body => {
// 			console.log(body)
// 			res.send(body)
// 		})
// })

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}...`)
})
