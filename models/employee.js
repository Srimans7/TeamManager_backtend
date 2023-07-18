
const mongoose = require('mongoose');

var count = 2;
const empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        //required:true
    },
    Id: {
        type: String,
        
        unique: true,
        required: true
    
    },
    date: {
        type: Date,
       
        default: () => {
           return new Date();
        }
    }
});

const employee = mongoose.model('employee', empSchema);

module.exports = employee;