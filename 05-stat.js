const fs = require('fs')

// fs.stat('test.txt', (err, stats) => {
// 	if (err) throw err
// 	console.log(`stats: ${JSON.stringify(stats, null, ' ')}`)

// 	try {
// 		if (err) throw err
// 		fs.rename('test.txt', 'test_new.txt', err => {
// 			if (err) throw err
// 			console.log('Название файла изменено')
// 		})
// 	} catch (err) {
// 		console.log('Москва, у нас проблемы:', err)
// 	}
// })

fs.stat('test_new.txt', (err, stats) => {
	if (err) throw err
	console.log(`stats: ${JSON.stringify(stats, null, ' ')}`)

	try {
		fs.unlinkSync('test_new.txt')
		console.log('удален test_new')
	} catch (er) {
		console.log(er.message)
	}
})