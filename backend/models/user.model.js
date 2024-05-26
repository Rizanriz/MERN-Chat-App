import mongoose from "mongoose";

const useSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    gender:{
        type:String,
        require:true,
        emun:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true})

const User = mongoose.model("User",useSchema)

export default User