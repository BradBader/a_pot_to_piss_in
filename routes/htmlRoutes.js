var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/barcodes", function(req, res) {
        if (req.query.barcode) {
            //find one from database to get item name, description, photo
            res.render("scanned", { barcode: req.query.barcode });
        } else {
            res.render("barcodes");
        };
    });

    app.get("/camera", function(req, res) {
        res.render("camera");
    })

    app.get("/registration", function(req, res) {
        res.render("registration");
    })

    app.get("/signin", function (req, res) {
        res.render("signin");
    })
};