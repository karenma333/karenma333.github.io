
var projBlurb = require("./projBlurb.json");
exports.view = function(req, res) {
    var image = req.params.image;
    var summary = req.params.summary;
    res.render('project', projBlurb);
    console.log("didit");
}
