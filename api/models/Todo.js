const mongoose = require('mongoose')
const toSchema = new  mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    

},{
    timestamps:true
})

const Todo = mongoose.model("Todo",toSchema)
module.exports =Todo;