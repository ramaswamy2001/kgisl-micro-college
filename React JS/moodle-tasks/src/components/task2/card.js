import React from "react";
import './card.css'
import profile from "./profile-img.png"
import watch from "./watch-img.png"
import "bootstrap/dist/css/bootstrap.css"

function Card(){
    return(
        <>
        
        <div className="container-fluid sup">

        <h1 className="text-center">congratulations</h1>
     <div className="row">
      <div className="col-lg-4"></div>
        <div className="bg-info col-lg-4 mt-5 p-4 text-center">
           
            <img src={profile}/>
            <h4>RAM</h4>
            <p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           <img src={watch}/>
        </div>
        <div className="col-lg-4"></div>
        </div>

        </div>

        



        </>
    )
}

export default Card;