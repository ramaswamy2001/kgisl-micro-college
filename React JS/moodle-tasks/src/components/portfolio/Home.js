import React from "react";
import "./home.css";
import ram1 from "./ram 1.png"

 export function Home(){
    return(
        <>
        <div className="container-fluid bg-home cent" id="home">
           <div className="row p-2">
                <div className="col-lg-6 cent">
                    <div className="p-3">
                        <h1 className="text-light display-5">I am</h1>
                        <h1 className="text-light display-5">RAMASWAMY S</h1>
                        <h3 className="text-light">Web Developer & Graphic Designer</h3>
                    </div>
                </div>
                <div className="col-lg-6 p-2 cent">
                    <div className="me1 col-lg-6 m-2 cent">
                        <img src={ram1} className="col-lg-12 portimg p-1 bor-wit"/>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        </>
    )

}