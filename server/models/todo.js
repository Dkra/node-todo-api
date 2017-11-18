const mongoose = require('mongoose')

const TodoSchema = {
	text: {
		type: String,
		require: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
}

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = { Todo }
