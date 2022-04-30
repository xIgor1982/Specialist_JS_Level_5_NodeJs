module.exports = function(app, db) {
	app.post('/book', (req, res) => {
		res.send('POST-query to /book')
		console.log('POST', req.body)
	})
}