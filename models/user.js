const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    name :{
        type : String,
        required: [true, "Must provide username"],
        trim:true
    },
    email : {
        type : String,
        required: [true, "Must provide email"],
        lowercase: true
    },
    password:{
        type: String,
        required: [true, "Must provide password"]
    }
})

UserSchema.pre('save', async function(next){
   if(!this.isModified('password')) return next()
   
   this.password = await bcrypt.hash(this.password, 12)
   next()
})

UserSchema.method.comparePasswordInDb = async function(pswd, pswdDB){
    return await bcrypt.compare(pswd, pswdDB)
}

module.exports = mongoose.model('User', UserSchema)