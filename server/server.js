var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

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

var lilly = new User({ email: 'Lilly@gmail.com' })

lilly.save().then(
	doc => {
		console.log('Save new user:', doc)
	},
	err => {
		if (err) {
			console.log('err:', err)
		}
		console.log('save success!')
	}
)
