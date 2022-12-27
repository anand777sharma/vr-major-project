const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title : String,
    discription : String,
    owner : Object,
    price : Number,
    image: String,
    createdAt :Date,
    category: String
})

module.exports = model( 'artsCollection', mySchema );
