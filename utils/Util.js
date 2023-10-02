function validateUrl(value) {
  if (value !== undefined && value.length > 0) {
		return true
	} else {
		return false
	}
}

module.exports = { validateUrl };