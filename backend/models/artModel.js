const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title : String,
    discription : String,
    owner : Object,
    price : Number,
    createdAt :Date,
    category:
    File
})

module.exports = model( 'artsCollection', mySchema );
