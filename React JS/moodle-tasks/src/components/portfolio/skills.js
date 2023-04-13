import React from "react";
import "./home.css";
import StarRatings from "react-star-ratings";
import html from "./htm.png";
import css from "./CSS.png";
import bootstrap from "./bt.png";
import JavaScript from "./js.png";
import ReactJS from "./rt.png";
import ps from "./ps.png";
import cd from "./cd.jpg";
import ind from "./id.png";
export function Skill(){
    return(
        <>
        <div className="bg-home text-light cent pt-5" id="skills">
            <div className="container">
                <div className="row justify-content-between ml-3">
                    <div className="col-lg-12 my-3 row justify-content-center text-center">
                        <div className="col-lg-2 m-3 ">
                            <img src={html} className="col-lg-12"/>
                            <h3>HTML</h3>
                            <StarRatings  rating={4.4} starDimension="25px" starSpacing="5px" starRatedColor="gold"/>
                        </div>
                        <div className="col-lg-2 m-3 ">
                        <img src={css} className="col-lg-12"/>
                            <h3>CSS</h3>
                            <StarRatings  rating={4.4} starDimension="25px" starSpacing="5px" starRatedColor="gold"/>
                        </div>
                        <div className="col-lg-2 m-3 ">
                        <img src={bootstrap} className="col-lg-12"/>
                            <h3>Bootstrap</h3>
                            <StarRatings  rating={4.4} starDimension="25px" starSpacing="5px" starRatedColor="gold"/>
                        </div>
                        <div className="col-lg-2 m-3 ">
                        <img src={JavaScript} className="col-lg-12"/>
                            <h3>JavaScript</h3>
                            <StarRatings  rating={3} starDimension="25px" starSpacing="5px" starRatedColor="gold"/>
                        </div>
                        <div className="col-lg-2 m-3 ">
                        <img src={ReactJS} className="col-lg-12 mb-4"/>
                            <h3>ReactJS</h3>
                            <StarRatings  rating={4.4} starDimension="25px" starSpacing="5px" starRatedColor="gold"/>
                        </div>
                    </div>
                    <div className="col-lg-12 my-3 row justify-content-center text-center">
                        <div className="col-lg-2 m-3 ">
                        <img src={ps} className="col-lg-12"/>
                            <h3>Photoshop</h3>
                            <StarRatings  rating={4.4} starDimension="25px" starSpacing="5px" starRatedColor="gold"/>
                        </div>
                        <div className="col-lg-2 m-3 ">
                        <img src={cd} className="col-lg-12"/>
                            <h3>CorelDraw</h3>
                            <StarRatings  rating={4.4} starDimension="25px" starSpacing="5px" starRatedColor="gold"/>
                        </div>
                        <div className="col-lg-2 m-3 ">
                        <img src={ind} className="col-lg-12"/>
                            <h3>InDesign</h3>
                            <StarRatings  rating={4.4} starDimension="25px" starSpacing="5px" starRatedColor="gold"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}