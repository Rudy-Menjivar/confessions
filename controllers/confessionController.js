const db = require("../models");

// Define methods for the confessionController
// This is for the user who is currently signed in
module.exports = {
    findAll: function (req, res) {
        db.Confession
        .find(req.query)
        .then(dbAllConfession => res.json(dbAllConfession))
        .catch(err => 
            res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Confession
        .findById(req.params.id)
        .then(dbOneConfession => res.json(dbOneConfession))
        .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Confession
        .create(req.body)
        .then(dbNewConfession => res.json(dbNewConfession))
        .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        console.log(req.params.id, req.body)
        db.Confession
        .updateOne({ _id: req.params.id }, { comment: req.body.comments })
        .then(dbUpdatedConfession => {
            console.log(dbUpdatedConfession)
            res.json(dbUpdatedConfession)
        })
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Confession
        .findById({ _id: req.params.id })
        .then(dbRemoveConfession => dbRemoveConfession.remove())
        .then(dbRemoveConfession => res.json(dbRemoveConfession))
        .catch(err => res.status(422).json(err));
    }
};
