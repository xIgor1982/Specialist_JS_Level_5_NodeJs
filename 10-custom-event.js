const EventEmitter = require('events')

//назначение обработчика
const myEmitter = new EventEmitter()
myEmitter.on('event', (...a) => {
	console.log(a)
})

//отправка события
myEmitter.emit('event', 'test')
myEmitter.emit('event', 'test2', 4, true)
