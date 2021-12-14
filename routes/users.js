
const User=require("../models/User");
const router = require("express").Router();


//register user
router.post("/register", async (req, res) => {
    const user = new User(req.body);
    console.log(req.body);
    try {
        await user.save();
        return res.status(201).send(user);
    } catch (e) {
        console.log(e)
        console.log(req.body);
        return res.status(400).send(e);
    }});

//update the user
router.put("/:id",async (req,res)=>{
    
        try{
            const user=await User.findByIdAndUpdate(req.params.id,{$set:req.body,});
            res.status(200).json("Account has been updated");
        }catch(err){
            return res.status(500).json(err);
        }
   
})


//get user
router.get("/allusers",async (req,res)=>{
   
        
    User.find({}, function(err, users) {
        var userMap = {};
    
        users.forEach(function(user) {
          userMap[user._id] = user;
        });
    
        res.send(userMap);  
      });
    
});


module.exports=router