import React from "react";
import "./login.css";
import lap from "./lap1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faEnvelope} from "@fortawesome/free-solid-svg-icons"
function Login(){
     return(
        <>
    <div className="color">
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-lg-1"></div>
                   <div className="col-lg-10 centerdiv row">
                     <div className="col-lg-6">
                       <img src={lap} className="col-sm-12 col-lg-8"></img>
                    </div>
                         <div className="col-lg-6 text-center py-5">
                          <h1 className="text-dark">Member Login</h1>
                           <div className="my-4"><span className="cal1 p-2"><FontAwesomeIcon icon={faEnvelope} className="text-dark" />            <input type="text" placeholder="email" className="cal"/></span></div>
                        <div className="my-4"><span className="cal1 p-2">
                           <FontAwesomeIcon icon={faEnvelope} className="text-dark" />
                             <input type="password" placeholder="password" className="cal"/>
                         </span></div>
                           <input type="button" value="login"className="bg-success btn"/>
                        <p className="text-dark"> forget username/password</p>
                         <p className="text-dark">creat new account</p>
                 </div>
             </div>
                      <div className="col-lg-1"></div>
          </div>
      </div>
   </div>   
        </>
     )
}

export default Login;