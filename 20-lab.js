const { mortgage, overpayment } = require('./21-mortgage')

console.log(mortgage(2e6, 10, 12))
console.log(overpayment(2e6, 10, 12))

const dayjs = require('dayjs')
require('dayjs/locale/ru')

dayjs.locale('ru')
console.log(dayjs().format('DD MMMM YYYY') + ' г.')