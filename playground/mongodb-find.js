const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to Mongo Server!')
	}

	console.log('Connected to MongoDB server!')
	/*
	db
		.collection('Todos')
		// .find() // All
		// .find({ completed: true }) // only complete field is true
		.find({ _id: ObjectID('5a0a6ba248089b3ebee93e8e') }) // specific _id
		.toArray()
		.then(
			docs => {
				console.log('Todos', JSON.stringify(docs, null, 2))
			},
			err => {
				console.log('Unable to fetch todos', err)
			}
		)
	*/
	/*
	db
		.collection('Todos')
		.find()
		.count()
		.then(
			count => {
				console.log('Todos count:', count)
			},
			err => {
				console.log('Unable to fetch todos', err)
			}
		)
	*/

	db
		.collection('User')
		.find({ name: 'Roger' })
		.toArray()
		.then(
			docs => {
				console.log('Todos:', docs)
			},
			err => {
				console.log('Unable to fetch todos', err)
			}
		)

	db.close()
})
