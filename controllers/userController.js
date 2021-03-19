const db = require("../models");

// Define methods for the confessionController
// This is for the user who is currently signed in
module.exports = {
    findAll: function (req, res) {
        db.User
        .find(req.query)
        .then(dbAllUser => res.json(dbAllUser))
        .catch(err => 
            res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
        .findById(req.params.id)
        .then(dbOneUser => res.json(dbOneUser))
        .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
        .create(req.body)
        .then(dbNewUser => res.json(dbNewUser))
        .catch(err => {
            console.log(err);
            res.status(422).json(err)
        });
    },
    update: function (req, res) {
        db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbUpdatedUser => res.json(dbUpdatedUser))
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
        .findById({ _id: req.params.id })
        .then(dbRemoveUser => dbRemoveUser.remove())
        .then(dbRemoveUser => res.json(dbRemoveUser))
        .catch(err => res.status(422).json(err));
    }
};
