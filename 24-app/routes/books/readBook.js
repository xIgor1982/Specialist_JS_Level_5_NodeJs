module.exports = function (app, db) {
	app.get('/book', (req, res) => {
		res.send('GET-query to /book')
		console.log('GET', req.query)
	})
}
