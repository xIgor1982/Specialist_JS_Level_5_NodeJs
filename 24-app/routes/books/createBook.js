const { v4: uuidv4 } = require('uuid')

module.exports = function (app, db) {
	app.post('/book', (req, res) => {
		//res.send('POST-query to /book')
		console.log('POST', req.body)

		let { title, author, price, pubYear } = req.body
		const uid = uuidv4()

		console.log('Проверка данных -> title =', title, '| author =', author, '| price =', price, ' | pubYear =', pubYear)


		db.create({ uid, title, author, price, pubYear }, err => {
			console.log('Ошибка:', err)
		})

		res.json({ uid })
	})
}
