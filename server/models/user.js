const mongoose = require('mongoose')

const UserSchema = {
	email: {
		type: String,
		default: 'roger@gmail.com',
		minlength: 1,
		require: true,
		trim: true
	}
}

// save new
var User = mongoose.model('User', UserSchema)

module.exports = { User }
