'use strict';
const Users=require('../../model/regusture_model');

module.exports=async(req,res,next)=>{
    try {
        const userRecords = await Users.findAll({});
        const UserNameOnly = userRecords.map(user => user.username);
        res.status(200).json(UserNameOnly);
      } catch (e) {
        console.error(e);
        next(e);
      }
}

