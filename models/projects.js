
const mongoose = require('mongoose');


const proSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
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
    },

    duedate: {
        type: Date,
       
        
    }
});

const projects = mongoose.model('project', proSchema);

module.exports = projects;