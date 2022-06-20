const bcrypt = require('bcrypt');
const REGUSTER_MODEL=require("../../model/regusture_model")


module.exports=async(req,res,next)=>{
    const{username,password,phonenumber,email,role}=req.body;
    try{
        let hashPassword=await bcrypt.hash(password,10);
        let user=await REGUSTER_MODEL.findOne({where:{username:username}});
        if(user){res.json({username:"Email Is Taken"});}
            if(!user){
                let newRecord=await REGUSTER_MODEL.create({
                    username:username,password:hashPassword,role:role,phonenumber:phonenumber,email:email
                });
                res.json(newRecord.dataValues)
                res.status(201)
            }
    }
    catch(err){ res.status(403).send('this username is already used , try again')}
}