const mongoose = require('./mongo');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;


const Members = new Schema(
    {        
        firstName: String,
        lastName: String,
        age: String,
        phone: String,
        email: String,
        gender: String,
        status: String,
    }
);

Members.plugin(autoIncrement.plugin, {model:'Members', field:'memberId', startAt: 1});
module.exports = mongoose.model('Members', Members);