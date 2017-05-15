var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
	title: {type: String, required: true},
	slug: {type: String, required: true},
	created_at: Date,
	updated_at: Date,
	//author: {type: mongoose.Schema.ObjectId, ref: 'Author'}
});

var AuthorSchema = new mongoose.Schema({
	name: {type: String, required: true},
	//articles: [{type: mongoose.Schema.ObjectId, ref: 'Article'}]
});

mongoose.model('Author', AuthorSchema);
//mongoose.Model('Article', ArticleSchema);