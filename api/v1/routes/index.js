var express = require('express');
var router = express.Router();
var authors =  require('../controllers/authors');
//var articles =  require('../controllers/articles');


/**
 * Author endpoints
 */
router.get('/authors', authors.fetchAll.bind(authors));
router.get('/authors/:id', authors.fetchOne.bind(authors));

/*router.post('/authors', authors.createOne);
router.post('/authors/:id/articles', authors.addArticle);

router.put('/authors/:id', authors.updateOne);

router.delete('/authors/:id', authors.deleteOne);
router.delete('/authors/:id/articles/:aid', authors.deleteArticle);
*/

/**
 * Article endpoints
 */
/*router.get('/articles', articles.fetchAll);
router.get('/articles/:id', articles.fetchOne);

router.post('/articles', articles.createOne);
router.post('/articles/:id/authors', articles.addAuthor);

router.put('/articles/:id', articles.updateOne);

router.delete('/articles/:id', articles.deleteOne);
router.delete('/articles/:id/authors/:aid', articles.deleteAuthor);
*/

/**
 * Export the router
 */
module.exports = router;
