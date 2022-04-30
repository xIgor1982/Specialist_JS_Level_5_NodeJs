const express = require('express')
const bodyParser = require('body-parser')
let mongoose = require('mongoose')

const PORT = 8888

mongoose.connect('mongodb://localhost:27017/eshop', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const Schema = mongoose.Schema
const booksSchema = new Schema({ 
	uid: String,
	title: String, 
	author: String, 
	price: Number,
	pubYear: Number,
})
const db = mongoose.model('Books', booksSchema)

const app = express()
// const db = {}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))

require('./routes/index')(app, db)

app.listen(PORT, () => {
	console.log(`Server listen port ... ${PORT}`)
})

app.get('/', (req, res) => {
	res.send('Hello, world!')
})
