module.exports.about = function(req, res) {
   var data = {title: 'Home', page: 'lists'};
   res.render('layout', data);
};