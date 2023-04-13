import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.css";
import cer1 from "./cer1.jpg";
import cer2 from "./cer2.jpg";
import cer3 from "./cer3.jpg";
import cer4 from "./cer4.jpg";

export function Certificate(){
    return(
        <>
    <div className="container-fluid bg-about p-5 cent" id="certificate">
        <div className="row p-5 justify-content-between text-center">        
            <figure className="col-lg-6 certi">
                <img src={cer1} className="col-lg-12"/>
                <figcaption>
                    <p>Introduction to Front-End Development</p>
                </figcaption>
            </figure>
            <figure className="col-lg-6 certi">
                <img src={cer2} className="col-lg-12"/>
                <figcaption>
                    <p>Style Sheets - CSS - Full Stack Developer / Web Development</p>
                </figcaption>
            </figure>
            <figure className="col-lg-6 certi">
                <img src={cer3} className="col-lg-12"/>
                <figcaption>
                    <p>Phase I - HTML - Full Stack Development(MERN)</p>
                </figcaption>
            </figure>
            <figure className="col-lg-6 certi">
                <img src={cer4} className="col-lg-12"/>
                <figcaption>
                    <p>Programming in JavaScript</p>
                </figcaption>
            </figure>
        </div>
    </div>
        </>
    );
}