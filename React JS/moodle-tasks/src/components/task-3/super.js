import React from "react";
import che from "./chennai.jpeg";
import ban from "./bangalore.jpeg";
import "./super.css";

function Super(){
    return(
        <>
            <div className="container-fluid super">
                <div className="container">
                    <div className="row">
                        <div className="col-1 col-lg-2"></div>   
                        <div className="col-10 col-lg-8 text-center mt-5 images">
                            <h1>super over league</h1>
                            <img src={che} alt="" className="col-12 col-lg-6 p-0"/>
                            <img src={ban} alt="" className="col-12 col-lg-6 p-0"/>
                        </div>
                        <div className="col-1 col-lg-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Super;