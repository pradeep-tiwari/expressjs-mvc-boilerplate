var AuthorController = function() {
	this.authorModel = require('../models/authors');		
};

AuthorController.prototype.fetchAll = function(req, res) {
	
	this.authorModel
		.fetchAll(function(err, authors) {
			if(err) {
				res.status(400).json(err);
			} else {
				res.status(200).json(authors);
			}
		});
	
};

AuthorController.prototype.fetchOne = function(req, res) {
	
	this.authorModel
		.fetchOne(req.params.id, function(err, author) {
			if(err) {
				res.status(400).json(err);
			} else if(!author) {
				res.status(404).json();
			} else {
				res.status(200).json(author);		
			}
		});
	
};

module.exports = new AuthorController();