import React from "react";
import "./tech.css";
import im1 from "./image1.jpeg"
import im2 from "./image2.jpeg"
import im3 from "./image3.jpeg"
import im4 from "./image4.jpeg"

function Tech(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                   <div className="col-lg-2"></div>
                      <div className="col-lg-8">
                        <div className="container-fluid text-center">
                          <h1>Learn 4.0 Technologies</h1>
                          <p>This automation creates a manufacturing system whereby machines in factories are augmented with wireless connectivity and sensors to monitor and visualise an entire production process and make autonomous decisions.</p>
                         </div>
                           <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6">
                                    <div class="card firstCard">
                                        <div class="card-body">
                                            <h5 class="card-title">data scientist</h5>
                                            <p class="card-text">A data scientist is an analytics professional who is responsible for collecting, analyzing and interpreting data to help drive decision-making in an organization.</p>
                                            <div className="text-right">
                                                <img src={im1} class="col-4"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <div class="card seccard">
                                        <div class="card-body">
                                            <h5 class="card-title">IOT DEVELOPER</h5>
                                            <p class="card-text"> IoT Developers are professionals who can develop, manage, and monitor IoT devices and systems by combining three core components – data, technology, and research.</p>
                                            <div className="text-right">
                                                <img src={im2} class="col-3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-sm-12 col-lg-6">
                                    <div class="card thirdcard">
                                        <div class="card-body">
                                            <h5 class="card-title">VR DEVELOPER</h5>
                                            <p class="card-text">A VR developer will likely need to work with a 3D system like 3DS Max and a 3D software development system like a game engine. Video game development.</p>
                                            <div className="text-right">
                                                <img src={im3} class="col-3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <div class="card fourthcard">
                                        <div class="card-body">
                                            <h5 class="card-title">ML ENGINNER</h5>
                                            <p class="card-text"> a person in IT who focuses on researching, building and designing self-running artificial intelligence (AI) systems to automate predictive models.</p>
                                            <div className="text-right">
                                                <img src={im4} class="col-3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                     <div className="col-lg-2"></div>
                </div>
             </div>
        
        
        
        
        </>
    )
}

export default Tech;