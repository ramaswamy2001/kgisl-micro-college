import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.css";
import school from "./school.png";
import clg from "./cl.png";

export function Education(){
    return(
        <>

        <div className="container-fluid bg-edu text-light cent" id="education">
            <div className="p-3">
                <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 row edu_bor p-2 my-3">
                    <div className="col-lg-6 p-2">
                    <img src={clg} className="col-lg-10"/>
                    </div>
                    <div className="col-lg-6 bg-glass p-3 cent">
                        <div>
                        <h2 className="display-5">Diploma in Electronics and communication Engineering (ECE)</h2>   
                        <h5>Bharath Polytechnic college.</h5>
                        <h1>78%</h1>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3"></div>
                
                </div>
                <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 row edu_bor p-2 my-3">
                    <div className="col-lg-6 p-2">
                    <img src={school} className="col-lg-10"/>
                    </div>
                    <div className="col-lg-6 bg-glass p-3 cent">
                        <div>
                        <h5 className="display-5">Vani Matriculation High School.</h5>
                        <h1 className="display-5">SSLC - 43%</h1>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
                </div>
            </div>
        </div>

        </>
    );
}