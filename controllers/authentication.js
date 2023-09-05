const user = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const util = require('util')
const signToken = id =>{
    return jwt.sign({"id": id}, process.env.SECRET_STR, {
        expiresIn: process.env.LOGIN_EXPIRES
    })
}


exports.signup = async (req, res, next) =>{
    
    try{
        const newUser = await user.create(req.body)
        const token = jwt.sign({id : newUser._id}, process.env.SECRET_STR, {
            expiresIn: process.env.LOGIN_EXPIRES
        })
        res.status(201).json({
            "status" : 'success',
            token,
            data:{
                user: newUser
            }
        });
    }catch(error){

    }
    
    
}

exports.login = async (req, res, next) =>{
     const email = req.body.email;
     const password = req.body.password

     const newUser = await user.findOne({email}).select('+password');

     
     if(!newUser || !(await bcrypt.compare(password, newUser.password))){
         res.status(400).json({
            "message" : "Check you're email or password again"
         })
     }else{
        const token = signToken(newUser._id)

        res.status(200)
        .json({
           status: 'sucess',
           token
        })
     }
     
     
}


exports.protect = async (req, res, next) =>{
    const testToken = req.headers.authorization
    console.log(testToken);
    let token;
    if(testToken && testToken.startsWith('bearer')){
        token = testToken.split(' ')[1]
    }
    if(!token){
        res.status(401).json({"message" : "Not Authorized"})
    }else{
        try{
            const decodedToken =   await util.promisify(jwt.verify)(token, process.env.SECRET_STR);
            next()
        }catch(error){
            res.status(401).json({"message" : "Not authorized"});
        } 
       
         
    }
}