const mongoose = require('mongoose');

// It is the schema for the User, 

const UserSchema = new mongoose.Schema({
    name :{
        type : 'String',
        required: true
    },
    email : {
        type : 'String',
        required : true,
        unique : true
    },
    password : {
        type : 'String',
        required : true
    },
    isAdmin : {
        type : 'Boolean',
        required : true
    },
    userToReview : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }],

    // recieved review from another people
    reviewRecivedFrom: [    
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        }
    ]
}, 
{
    timestamps : true
}
);

const User = mongoose.model('User' , UserSchema);
module.exports = User;