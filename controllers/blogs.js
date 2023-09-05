const Blog = require('../models/blog')


const getAllBlogs = async(req,res) =>{
    try{
        const blogs = await Blog.find({})
        res.status(200).json({blogs})
    }catch(error){
     res.status(500).json({msg : error})
    }
} 

const createBlog = async (req, res) =>{
    try{
        const blog = await Blog.create(req.body);
        res.status(201).json({blog})
    }catch(error){
        res.status(400).json(error.errors.name.message)
    }
}


const updateBlog = async (req, res) =>{
    
    try{
        const {id:blodID} = req.params;
        const updatedBlog = await Blog.findOneAndUpdate({_id:blodID}, req.body,{
            new:true, runValidators: true
        })
        if(!updatedBlog){
            return res.status(404).json({msg: `No Blog with id: ${taskID}`})
        }
        res.status(200).json({updatedBlog});
    }catch(error){
       res.status(404).json({msg:error})
    }
}

const getBlog = async (req, res) =>{
    const {id:blogID} = req.params;
    try{
        const singleBlog = await Task.findOne({_id:blogID});
        if(!singleBlog){
            return res.status(404).json({msg: `No task with id: ${blofID}`})
        }
        console.log(singleBlog);
        res.status(200).json({singleBlog})
        
    }catch(error){
        res.status(500).json({msg:error})
    }
}


const deleteBlog = async(req, res) =>{
    const {id:blogID} = req.params;
    try{
        const singleBlog = await Blog.findOneAndDelete({_id:blogID});
        if(!singleBlog){
              return res.status(404).json({msg: `No task with id: ${blogID}`})
        }
        res.status(200).json({singleBlog})
        
    }catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {getAllBlogs, createBlog, getBlog, updateBlog, deleteBlog}