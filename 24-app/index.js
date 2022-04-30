const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8888

const app = express()
const db = {}

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({type: 'application/json'}))

require('./routes/index')(app, db)

app.listen(PORT, () => {
	console.log(`Server listen port ... ${PORT}`)
})

app.get('/', (req, res) => {
	res.send('Hello, world!')
})