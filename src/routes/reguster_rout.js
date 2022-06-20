const express = require('express')
const router = express.Router()



//ALL MEDILWARE FUNCTION ARE USE
const signup=require("../controllers/regusterControllers/signup")
const signin=require("../controllers/regusterControllers/signin")
const getall=require("../controllers/regusterControllers/getall")


//BASIQ AUTH REQUIRE
const BASIC_AUTH=require("../auth/BASIC_AUTH")
const BAREAR_AUTH=require("../auth/BAREAR_AUTH")

//ALL ROUTES ARE USED
router.post("/signup",signup)
router.post("/signin",BASIC_AUTH,signin)
router.get("/users",BAREAR_AUTH,getall)


module.exports=router

