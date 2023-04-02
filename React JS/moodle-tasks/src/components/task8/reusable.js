import React from "react";
import { Link } from "react-router-dom";
import myGif from './hewwo.gif';

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
        <Link to="/" class="nav-link">Hello</Link>
      </li>
      <li class="nav-item">
        <Link to="/card" class="nav-link">Card</Link>
      </li>
      <li class="nav-item">
        <Link to="/super" class="nav-link">Super</Link>
      </li>
      <li class="nav-item">
        <Link to="/social" class="nav-link">Social</Link>
      </li>
      <li class="nav-item">
        <Link to="/noti" class="nav-link">Noti</Link>
      </li>
      <li class="nav-item">
        <Link to="/login" class="nav-link">Login</Link>
      </li>
      <li class="nav-item">
        <Link to="/tech" class="nav-link">Tech</Link>
      </li>
      <li class="nav-item">
        <Link to="/hooks" class="nav-link">Hook</Link>
      </li>
      <li class="nav-item">
        <Link to="/fruits" class="nav-link">Fruit</Link>
      </li>
      <li class="nav-item">
        <Link to="/feedback" class="nav-link">Feedback</Link>
      </li>
    </ul>
  </div>
</nav>
        
        </>
    )
}

export default Reuse;