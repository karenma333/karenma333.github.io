

var projBlurb = require("./projBlurb.json");
exports.view = function(req, res) {
    var image = req.params.image;
    var summary = req.params.summary;
    res.render('index', projBlurb);
}
