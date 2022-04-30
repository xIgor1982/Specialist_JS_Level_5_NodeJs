module.exports = function (app, db) {
	app.delete('/book', (req, res) => {
		res.send('DELETE-query to /book')
		console.log('DELETE', req.body)
	})
}
