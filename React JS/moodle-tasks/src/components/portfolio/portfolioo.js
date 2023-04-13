import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Link as Single } from 'react-scroll';

export function Portmenu(){
    return(
        <>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <Single activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="Ram"><li class="navbar-brand">Ram</li></Single>
            <Single activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="home"><li class="nav-link text-dark">Home</li></Single>
            <Single activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="about"><li class="nav-link text-dark">About</li></Single>
            <Single activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="education"><li class="nav-link text-dark">Education</li></Single>
            <Single activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="certificate"><li class="nav-link text-dark">Certification</li></Single>
            <Single activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="skills"><li class="nav-link text-dark">Skills</li></Single>
            <Link to="/Hello"><li class="nav-link text-dark">Project</li></Link>
            <Single activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="contact"><li class="nav-link text-dark">Contact</li></Single>
          </ul>
          </div>
          </nav>
        </div>
        </>
    )
}