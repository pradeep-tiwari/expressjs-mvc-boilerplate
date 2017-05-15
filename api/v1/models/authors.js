var AuthorModel = function() {
	
	this.AuthorSchema = require('mongoose').model('Author');	

};

AuthorModel.prototype.fetchAll = function(callback) {
	
	this.AuthorSchema
		.find()
		.exec(function(err, authors) {
			return callback(err, authors);
		});

};

AuthorModel.prototype.fetchOne = function(authorID, callback) {
	
	this.AuthorSchema
		.findOne({_id: authorID})
		.exec(function(err, author) {
			return callback(err, author);
		});

};

module.exports = new AuthorModel(); 