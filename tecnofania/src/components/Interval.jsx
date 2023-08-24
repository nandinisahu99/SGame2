import { useEffect, useRef, useState } from "react"

//import React from 'react'

export default function Interval({setMsg,LevelUp,setLevelUp,setStop,username}) {
  
    // const [Seconds, setSeconds]=useState(0)
    const [Flag, setFlag]=useState(false)
    const [Intime,setIntime]=useState(30)
    const [Input, setInput]=useState(false)
    const [Penalty, setPenalty]=useState(false);

    const tokenInput=useRef();

    const getToken=()=>{
        fetch("http://localhost:5000/user/get_token", {
            method:"POST",
            body: JSON.stringify({roll:username}),
            headers:{
            "Content-Type":"application/json" }
        }).then(res=>res.json())
          .then(data=>{
            setMsg(()=>data.token);
            console.log(data.token);
        })
    } 
    const enterRoundTwo=(token, roll)=>{
        fetch("http://localhost:5000/user/verify_token", {
            method:"POST",
            body: JSON.stringify({roll:roll, token:token}),
            headers:{
            "Content-Type":"application/json" }
        }).then(res=>res.json())
          .then(data=>{
            // console.log(data.status);
            if(data.status){
                setLevelUp(true);
                setStop(false);
            }
            
        })
    }
   
    useEffect(()=>{
        if(Intime===0 && Flag===false) { 
            getToken();
            setIntime(5);
            setFlag(true);
        }
        else if(Intime===0 && Flag===true && Penalty===false){
            if(Input===false){
            setMsg("Enter the token now!")
            setInput(true);
            setIntime(20);
            setPenalty(true);
            }
            
        }else if(Intime===0 && Flag===true && Penalty===true){
            // setStop(false);
            console.log("Penalty");
            setLevelUp(true);
            setStop(false);
        }
        
        const interval=setInterval(()=>{
            setIntime((prev) => prev>0?prev-1:0);
        },1000);

        return() => clearInterval(interval);
    },[setStop,Intime]);
  return (<>
  <div className="timer">{Intime}</div>
  {Input?(
    <div className="Start">
    <input type="text" className="startInput" name="" id="" disabled={Intime===0?true:false} ref={tokenInput}/>
    <input type="button" className="Statbutton" value="Submit" onClick={()=> enterRoundTwo(tokenInput.current.value, username)} disabled={Intime===0?true:false} />
  </div>
  ):(<div></div>)}
  </>)
}
