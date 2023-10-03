function validateUrl(value) {
	var urlPattern = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]*\.[a-zA-Z0-9()]*\.([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
  if (value !== undefined && value.length > 0) {
		if (!urlPattern.test(value)) {
			throw "ArgumentException"
		}
		return true
	}
	else {
		throw "InvalidArgumentException"
	}
}

module.exports = { validateUrl };