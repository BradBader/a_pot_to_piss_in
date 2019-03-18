var db = require("../models");

module.exports = function(app) {
    app.post("/api/register", function(req, res) {
        //passport encyrption
        // db.User.create({
        //     first_name: req.body.first_name,
        //     last_name: req.body.last_name,
        //     email: req.body.email,
        //     password: req.body.password
        // });
    })
};