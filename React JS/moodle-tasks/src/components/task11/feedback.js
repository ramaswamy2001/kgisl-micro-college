import React from "react";
import "./feedback.css";
import { Link } from "react-router-dom";

function Feedback(){
    return(
        <>
        <div className="container-fluid feedback">
            <div className="row">
               <div className="col-lg-2"></div> 
                <div className=" col-lg-8 text-center  rss">
                    <h3>How satisfied are you with our customer support performance</h3>
                    <div className="row">   
                      <Link to='/tha'><h1 className="emoji ml-4">&#128532;</h1></Link>
                     <Link to='/tha'><h1 className="emoji ml-4">&#128529;</h1></Link>
                     <Link to='/tha'><h1 className="emoji ml-4">&#128525;</h1></Link>
                    </div>
                </div>
                <div className="col-lg-2"></div>     
            </div>

        </div>
        
        
        </>
    )
}

export default Feedback;
