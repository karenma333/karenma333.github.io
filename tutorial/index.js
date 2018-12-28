var home = require("./home.json");
exports.view = function(req, res) {
    res.render('index', home);
}
