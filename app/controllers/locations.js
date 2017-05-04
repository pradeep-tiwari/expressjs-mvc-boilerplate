module.exports.homeList = function(req, res) {
    var data = {title: 'Home', page: 'lists'};
    res.render('layout', data);
};

module.exports.locationInfo = function(req, res) {
    var data = {title: 'Home', page: ''};
    res.render('layout', data);
};

module.exports.addReview = function(req, res) {
    var data = {title: 'Home', page: ''};
    res.render('layout', data);
};