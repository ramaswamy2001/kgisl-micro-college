import React from "react";
import "./noti.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"
import {faBell ,faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
 export function Noti(){
    return(
        <>
        <h1 className="text-center">Notifications</h1>
         <div className="continer-fluid">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <p className="bg-primary text-white p-3 m-4 noti"><FontAwesomeIcon icon={faCircleCheck} className="mr-4"/>informations message</p>
                    <p className="bg-success text-white p-3 m-4 noti"><FontAwesomeIcon icon={faCircleCheck} className="mr-4" />success message</p>
                    <p className="bg-warning text-white p-3 m-4 noti"><FontAwesomeIcon icon={faBell} className="mr-4"/> warning message</p>
                    <p className="bg-danger text-white p-3 m-4 noti"><FontAwesomeIcon icon={faCircleExclamation} className="mr-4"/>Error message</p>
                </div>
                <div className="col-lg-4"></div>
            </div>

        </div>

        </>
    )
}
