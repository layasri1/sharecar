const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
    username: {
        type: String,required :true
    },
    password: {
        type: String ,required :true
    }
}, {
        collection: 'users'
    })

const userModel =mongoose.model('users', userSchema)
module.exports = userModel