const mongoose = require('./mongo');
const Schema = mongoose.Schema;

const Register = new Schema(
    {        
        firstName: String,
        lastName: String,
        email: String,
        date: Date        
        
    }
);

module.exports = mongoose.model('Register', Register);
