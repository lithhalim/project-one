const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports=async (req,res,next)=>{
    try {
        user=req.usered
        var newToken = jwt.sign({ username:user.username }, process.env.SECRET_ACCES_KEY ,{expiresIn:"60m"});
        user.token=newToken;
        res.status(200).json(user);
    }
     catch (error) {
       res.status(403).send('Invalid Signin');
       }
      
}