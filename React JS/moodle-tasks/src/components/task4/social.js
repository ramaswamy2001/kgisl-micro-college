import React from "react";
import "./social.css";

function Social(){
    return(
      <>
       
        <div className="container-fluid social">
            <div className="row">
            <div className="col-lg-3"></div>


             <div className="col-lg-6 mt-5 text-center">
              
                <div className="buttons">
                  <h1 className="color1">Social Button</h1>
                  <input type="button" value="Like" className="btn btn-warning text-white mr-5"/>
                  <input type="button" value="Comment" className="btn bg-white mr-5 "/>
                  <input type="button" value="Share" className="btn btn-primary text-white mr-5 "/>
                </div>
            </div>
            
            <div className="col-lg-3"></div>
            
        </div>    
          </div>
      </>
    )
}

export default Social;