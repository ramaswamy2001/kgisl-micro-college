import React from "react";
import { Link } from "react-router-dom";

export function Project(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <Link to="/"><li class="nav-link text-dark">Back</li></Link>
              <Link to="/Hello"><li class="nav-link text-dark">Hello</li></Link>
              <Link to="/Card"><li class="nav-link text-dark">Card</li></Link>
              <Link to="/Super"><li class="nav-link text-dark">Super</li></Link>
              <Link to="/Social"><li class="nav-link text-dark">Social</li></Link>
              <Link to="/Noti"><li class="nav-link text-dark">Notification</li></Link>
              <Link to="/Login"><li class="nav-link text-dark">Login</li></Link>
              <Link to="/Tech"><li class="nav-link text-dark">Tech</li></Link>
              <Link to="/Hooks"><li class="nav-link text-dark">Hooks</li></Link>
              <Link to="/Fruit"><li class="nav-link text-dark">Fruit</li></Link>
              <Link to="/Feedback"><li class="nav-link text-dark">Feedback</li></Link>
            </ul>
          </div>
        </nav>
        </>
    )
}