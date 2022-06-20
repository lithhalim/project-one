const base64 = require('base-64');
const REGUSTER_MODEL=require("../model/regusture_model")
const bcrypt = require('bcrypt');



module.exports=async (req,res,next)=>{
    //----------------------------------DECODED THE CODE ---------------------------------------------//
        let basicHeaderParts = req.headers.authorization.split(' '); 
        let encodedString = basicHeaderParts.pop(); 
        let decodedString = base64.decode(encodedString);
        let [username, password] = decodedString.split(':');



        try{
            const user = await REGUSTER_MODEL.findOne({ where: { username: username } });
            const valid = await bcrypt.compare(password, user.password);
            if(valid){
            req.usered=user
            next()
            }
            else{
                throw new Error('EMAIL OR PASSWORD ARE WRONG');
            }


        }
        catch (error) { 
            res.status(403);
            res.send("Invalid Signin");
    
        }

}