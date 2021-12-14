const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
       
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    
    profilePicture:{
        type:String,
        default:""
    },
    status:{
        type:String,
        max:50,
        required:true,
        default:"Available"
    },
    
    city:{
        type:String,
        max:50,
        required:true
    },
    bloodgroup:{
        type:String,
        max:50,
        required:true
    },
    mobilenumber:{
        type:String,
        max:20,
        required:true
    }
   

},{timestamps:true});

module.exports=mongoose.model("User",UserSchema);