const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    image:{
        type :String,
        required:[true,"Please Provide an image"],

    },
    title :{
        type:String,
        required :true,
    },
    stack :{
        type:Array,
        required:true,
    },
    url :{
        type:String,
        required :true,
    },
    description :{
        type:String,
        required :true,
    },
});

module.exports = mongoose.model("project",projectSchema);