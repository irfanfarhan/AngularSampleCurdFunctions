var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items

var User = new Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String,
    role: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);