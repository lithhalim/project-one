const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const reguster_rout=require("../routes/reguster_rout")
app.use(reguster_rout)


const apiv2=require("../routes/api-v2")
app.use(apiv2)




const MAINPAGE=require('../controllers/mainpage/MAINPAGE')
app.get('/',MAINPAGE)







const NotFound=require("../middelware/404")
const SomthingBroken=require("../middelware/500")
app.use(SomthingBroken)
app.use(NotFound)






const database=require("../database/database")
async function start(PORT){
app.listen(PORT, async() => {
    try {
        await database.authenticate();
        await database.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }      
  console.log(`Example app listening on port ${PORT}`)
})
}


module.exports ={
    app: app,
    start: start,
}
