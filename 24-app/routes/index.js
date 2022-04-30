const createBook = require('./books/createBook')
const readBook = require('./books/readBook')
const updateBook = require('./books/updateBook')
const deleteBook = require('./books/deleteBook')

module.exports = function(app, db) {
	createBook(app, db)
	readBook(app, db)
	updateBook(app, db)
	deleteBook(app, db)
}