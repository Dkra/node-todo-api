const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to Mongo Server!')
	}

	console.log('Connected to MongoDB server!')

	db.collection('Todos').insertOne({
		text: 'Something',
		completed: false
	},
	(err, result) => {
		if (err) {
			return console.log('Unable to insert Todo', err)
		}

		console.log(JSON.stringify(result.ops, undefined, 2))
	})

	db.collection('User').insertOne({
		name: 'Roger',
		age: 28,
		location: 'Taiwan'
	},
	(err, result) => {
		if (err) {
			return console.log('Unable to insert User', err)
		}

		console.log(JSON.stringify(result.ops, undefined, 2))
		console.log(result.ops[0]._id.getTimestamp())
	})

	db.close()
})
