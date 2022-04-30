module.exports = function (app, db) {
	app.put('/book', (req, res) => {
		res.send('PUT-query to /book')
		console.log('PUT', req.body)
	})
}
