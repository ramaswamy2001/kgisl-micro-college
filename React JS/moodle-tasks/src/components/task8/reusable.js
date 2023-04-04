import React from "react";
import { Form, Link } from "react-router-dom";
import myGif from './hewwo.gif';
import {Link as Ra} from "react-scroll" 

function Reuse(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item">
        <Ra to="/" class="nav-link">Hello</Ra>
      </li>
      <li class="nav-item">
        <Ra to="card" activeClass="active" spy={true} smooth={true} offset={50} duration={500} class="nav-link">Card</Ra>
      </li>
      <li class="nav-item">
        <Ra to="super"  activeClass="active" spy={true} smooth={true} offset={50} duration={500} class="nav-link">Super</Ra>
      </li>
      <li class="nav-item">
        <Ra to="social"  activeClass="active" spy={true} smooth={true} offset={50} duration={500} class="nav-link">Social</Ra>
      </li>
      <li class="nav-item">
        <Ra to="noti"  activeClass="active" spy={true} smooth={true} offset={50} duration={500} class="nav-link">Noti</Ra>
      </li>
      <li class="nav-item">
        <Ra to="log"  activeClass="active" spy={true} smooth={true} offset={50} duration={500} class="nav-link">Login</Ra>
      </li>
      <li class="nav-item">
        <Ra to="tech"  activeClass="active" spy={true} smooth={true} offset={50} duration={500} class="nav-link">Tech</Ra>
      </li>
      <li class="nav-item">
        <Ra to="hooks"  activeClass="active" spy={true} smooth={true} offset={50} duration={500} class="nav-link">Hook</Ra>
      </li>
      <li class="nav-item">
        <Ra to="fru"  activeClass="active" spy={true} smooth={true} offset={50} duration={500} class="nav-link">Fruit</Ra>
      </li>
      <li class="nav-item">
        <Ra to="rsd"  activeClass="active" spy={true} smooth={true} offset={50} duration={500} class="nav-link">Feedback</Ra>
      </li>
    </ul>
  </div>
</nav>
        
        </>
    )
}

export default Reuse;