const {Schema, model} = require('mongoose')

const schema = new Schema({
    id: {type: Number, required: true, unique: true},
    first_name: String,
    active: Number,
    regDate: Date,
    state: String,
    left: Boolean,
    asked: Boolean,
    banned: Boolean
})

module.exports = model('users', schema)