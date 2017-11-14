const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to Mongo Server!')
	}

	console.log('Connected to MongoDB server!')

	// deleteOne
	/*
	db
		.collection('Todos')
		.deleteOne({
			text: 'Hello'
		})
		.then(result => {
			console.log('result:', result)
		})
  */

	// deleteMany
	/*
	db
		.collection('Todos')
		.deleteMany({ text: 'Hello' })
		.then(result => {
			console.log('result:', result)
		})
  */

	// findOneAndDelete * very useful
	db
		.collection('Todos')
		.findOneAndDelete({
			text: 'Hello'
		})
		.then(result => {
			console.log('result:', result) // will return this deleted obj
		})
	db.close()
})
