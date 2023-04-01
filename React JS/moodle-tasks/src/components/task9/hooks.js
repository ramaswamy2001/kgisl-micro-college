import React, { useState } from "react";
import "./hooks.css";
function Hook(){
    // const[variable,setVariable]=useState(inivalue)
     const[count,setCount]=useState(0)
    // function Incr(){
    //     setCount(count+10)
    // }
    return(
    <>
     <div className="container-fluid ">
        <div className="row">
      <div className="col-lg-4"></div>
        <div className="hok1 text-center col-lg-4">
            <h1 className="rs">Hooks Assignment</h1>
            <h1 className="rm">{count}</h1>
            <button onClick={()=>{setCount(count+1)}} className="bt1" >Increment</button><br/>
            {/* <button onClick={Incr}>Click</button> */}
            <button onClick={()=>{setCount(count-1)}} className="bt2">Decrement</button><br/>
            <button onClick={()=>{setCount(count*0)}} className="bt3">Reset</button><br/>
        
        </div>
        <div className="col-lg-4"></div>
        </div>
        </div>

   
    </>
    )
}

export default Hook;