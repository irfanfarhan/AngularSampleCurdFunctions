// coinRoutes.js

var express = require('express');
var userRoutes = express.Router();

// Require Item model in our routes module
var User = require('../models/User');

userRoutes.route('/add').post(function(req, res, next) {
    User.find({ email: req.body.email }, function(err, user) {
        if (err) throw err;
        // object of the user
        console.log(user);
        if (user.length == 0) {
            User.create(req.body, function(err, post) {
                if (err) return next(err);
                res.json(post);
            });
        } else {
            return res.json(user);
        }
    });
});
// Defined get data(index or listing) route
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.send(users);
        }
    });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function(req, res) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

//  Defined update route
userRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            return next(new Error('Could not load Document'));
        else {
            user.userName = req.body.userName;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.role = req.body.role;
            user.email = req.body.email;
            user.password = req.body.password;
            user.confirmPassword = req.body.confirmPassword;

            user.save().then(user => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function(req, res) {
    User.findByIdAndRemove({ _id: req.params.id }, function(err, user) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;