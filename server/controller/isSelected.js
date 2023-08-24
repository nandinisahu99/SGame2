const db=require("../model/db.js");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const isSelected= async(req,res)=>{
    try{
        const {roll}=req.body;
        let result;
        
        db.query("select count(*) as namecount from candidates where selected=1",async(err, results)=>{
            if(err){
                console.log(err);
                return res.json({selected:false});
            }  
            result=results[0].namecount;
            console.log(result);
            console.log(roll);
            if(results[0].namecount<5){
                //db.query("update candidates set selected=1 where roll=?",[roll], async(err)=>{
                    db.query(`update candidates set selected=1 where roll=${roll}`, async(err)=>{
                    if(err){
                        return res.json({err});
                    }
                })
                
                return res.json({message: "success", selected: true})
            }else{
                return res.json({message:"You are late :-( Thank You for participating...", selected: false});
            }
        })   
    }
    catch(err){
        console.log(err);
        res.json({err});
    }
}
module.exports=isSelected;