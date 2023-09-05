const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, "Must provide name"],
        trim:true,
        maxlength:[20, 'name cannot be more than 20 characters']
    },
    blog:{
        type: String,
        required: [true, "Must provide blog"],
        trim : true
    }
})

module.exports = mongoose.model('Blog', BlogSchema)