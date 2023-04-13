import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Contact(){
    return(
        <>
        <div className="container-fluid bg-con text-light" id="contact">
            <div className="row p-3">
                <div className="col-lg-6 row">
                    <div className="col-lg-6">
                        <h2>Address:</h2>
                        <h6>Chennai.</h6>
                    </div>
                    <div className="col-lg-6">
                        <h2>My Contact</h2>
                        <h6>Phone: +91 9363149788</h6>
                        <h6>G-mail: ramaswamys2002@gmail.com</h6>
                    </div>
                </div>
                <div className="col-lg-6 d-flex flex-row">
                    <Link to='tel:9363149788' className="contectfontaw non text-light display-4 m-3"><FontAwesomeIcon icon={faPhone}/></Link>
                    <Link to='mailto:ramaswamys2002@gmail.com' className="non contectfontaw text-light display-4 m-3"><FontAwesomeIcon icon={faEnvelope} /></Link>
                    <Link to='https://www.linkedin.com/in/ramaswamy-sankar-6b63a7262/' className="non contectfontaw text-light display-4 m-3"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    <Link to='https://github.com/ramaswamy2001' className="non contectfontaw text-light display-4 m-3"><FontAwesomeIcon icon={faGithub} /></Link>
                </div>
            </div>
        </div>
        </>
    );
}