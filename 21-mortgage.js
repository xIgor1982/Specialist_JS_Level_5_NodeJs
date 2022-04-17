const mortgage = (S, p, n) => {
	p /= 1200
	n *= 12

	return Math.round((S * p) / (1 - (1 + p) ** -n))
}

exports.mortgage = mortgage

exports.overpayment = (S, p, n) => {
	return Math.round(mortgage(S, p, n) * n * 12 - S)
}
