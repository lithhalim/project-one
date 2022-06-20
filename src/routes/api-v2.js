const express = require('express')
const router = express.Router()
const dataModules = require('../model/indexses');

router.param('model', (req, res, next) => {
    const modelName = req.params.model;
    if (dataModules[modelName]) {
      req.model = dataModules[modelName];
      next();
    } else {
      next('Invalid Model');
    }
  });

//ALL CONTROLLERS FUNCTION ARE USE
const creater=require("../controllers/createUser/CREATE")
const getter=require("../controllers/createUser/GET_ALL")
const updatter=require("../controllers/createUser/UPDATE")
const deletter=require("../controllers/createUser/DELETE")
const getone=require("../controllers/createUser/GET_ONE")

//ALL THE MIDDEL WARE USED
const capability=require("../middelware/capalility")
const BAREAR_AUTH=require("../auth/BAREAR_AUTH")




//ALL ROUTES ARE USED
router.post("/api/v2/:model",BAREAR_AUTH,capability("create"),creater)
router.get("/api/v2/:model",BAREAR_AUTH,getter)
router.put("/api/v2/:model",BAREAR_AUTH,capability("update"),updatter)
router.delete("/api/v2/:model",BAREAR_AUTH,capability("delete"),deletter)
router.get("/api/v2/:model",BAREAR_AUTH,capability("delete"),getone)


module.exports=router


  
  
  

