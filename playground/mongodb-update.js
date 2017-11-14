const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to Mongo Server!')
	}

	console.log('Connected to MongoDB server!')

	// update

	// updateOne

	// updateMany

	// findOneAndUpdate * very useful
	db
		.collection('User')
		.findOneAndUpdate(
			/* Parameters */
			// filter
			{
				_id: new ObjectID('5a0a637422bb033b46a1e4e4')
			},
			// update operators
			{
				$inc: {
					age: 1
				}
			},
			// options
			{
				returnOriginal: false
			}
		)
		.then(result => {
			console.log('result:', result) // will return this deleted obj
		})

	db.close()
})
