import React, { useState } from "react";
import "./fruits.css";
import ban from "./bana.png"
import mang from "./mango.png"

function Fruit(){

    const[countmango,setCountmango]=useState(0)
    const[ countBananas,setCountBananas]=useState(0)

    return(
        <>
          <div className="container-fluid bg-fc">
            <div className="row">
            <div className="centerdiv container-fluid row rr">
                <div className="col-lg-12 text-center">
                     <h1>Bob ate <span className="count">{countmango}</span> mangoes <span className="count">{countBananas}</span> bananas</h1>
                </div>
                <div className="col-lg-6" text-center>
                    <img src={mang} className="mango"/>
                    <button onClick={()=>{setCountmango(countmango+1)}} >mango</button>
                </div>
                <div className="col-lg-6">
                    <img src={ban}/>
                    <button onClick={()=>{setCountBananas(countBananas+1)}}>bananas</button>
                </div>
            </div>
            </div>
          </div>
          

        
        
        
        </>
    )
}

export default Fruit;