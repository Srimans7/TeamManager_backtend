
const mongoose = require('mongoose');


const proSchema = new mongoose.Schema({
    name: {
        type: String,
        
    }, 
    
    project: {
        type: String,
       
    },
    member: {
        type: [String],

        

    },
    Id: {
        type: String,

        

    },
    date: {
        type: Date,

        default: () => {
            return new Date();
        }
    },
   
    
});

const projects = mongoose.model('team', proSchema);

module.exports = projects;