module.exports=(capability)=>{
    return(req,res,next)=>{
        try{
            console.log(req.user.action)
            if(req.user.action.includes(capability)){
                next()
            }
            else{
               res.send("acsess deind")
            }
    
        }catch(e){
            next('invaled login')
        }
    }
}