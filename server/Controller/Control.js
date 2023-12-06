const projectModel = require('../Model/projectModel')


// GET ALL PROJECTS
const getAll = async(req,res)=>{
    const projects =  await projectModel.find({})
    res.status(200).send(projects)
}

// ADD A NEW PROJECT
const addProject = async(req,res)=>{
    const { image,title,stack,url,description }= req.body;

    let result = await projectModel.create({
        image:image,
        title:title,
        stack:stack,
        url:url,
        description:description,
    })
    res.status(200).json({
        msg:"Added",
        success:true    
    })
}

module.exports={getAll,addProject};