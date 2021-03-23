const db = require("../models");

// Define methods for the categoriesController
// This is for the user who is currently signed in
module.exports = {
    findAll: function (req, res) {
        db.Categories
        .find(req.query)
        .then(dbAllCategories => res.json(dbAllCategories))
        .catch(err => 
            res.status(422).json(err));
    }
};
