const users = require('./19.json')

users.forEach(({name}) => {
	console.log(`Имя: ${name}`)
})