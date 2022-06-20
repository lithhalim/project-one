require('dotenv').config();
const jwt = require('jsonwebtoken');
const REGUSTER_MODEL=require("../model/regusture_model")


module.exports = async (req, res, next) => {
  try {
    if(!req.headers.authorization){
      return res.send("You are not authorized  please set the barear ")
    }
    if (req.headers.authorization) {
    var token = req.headers.authorization.split(' ')[1];
    const parsedToken = jwt.verify(token, process.env.SECRET_ACCES_KEY)
    const user =await REGUSTER_MODEL.findOne({where:{username:parsedToken.username}})
    req.user=user
    next()
    }
  } catch (e) {
    res.status(403);
    res.send("Invalid Signin");

  }
}

