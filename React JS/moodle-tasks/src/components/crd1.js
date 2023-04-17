import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import "./bg.css";
export function Tsk1(){


    return(
        <>
        {/* Menu */}
        <div className="container-fluid bg-naimg">
        <nav class="navbar navbar-expand-lg navbar-light bg-light bg-tra">
            <a class="navbar-brand" href="#">RAM</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 hed">
                <li class="nav-item"><button class="btn-cl btrd" type="submit">Find Candidates</button></li>
                <li class="nav-item"><a class="nav-link" href="#">Find Jobs</a></li>
                <li class="nav-item"><a class="nav-link">Find Companies</a></li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="btn btn-outline-light my-2 my-sm-0 mx-lg-2" type="button" value="login"/>
                <button class="btn btn-danger my-2 my-sm-0 mx-lg-2" type="submit">Search</button>
            </form>
            </div>
        </nav>
        {/* Head */}
        <div className="container py-5">
            <h1 className="text-center text-danger pt-lg-5 pb-lg-3">Find the candidates as per your requirements</h1>
            <div className="cent pb-lg-5">
                <div className="row bg-light p-2 justify-content-center w-75 bord">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="p-2 siz"/>
                    <input class="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Job Title / Keyword"/>
                    <FontAwesomeIcon icon={faLocationDot}  className="p-2 siz"/>
                    <input class="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Add Country / City"/>
                    <button class="btn bt my-2  my-sm-0 " type="submit">Search</button>
                </div>
            </div>
      </div>
      </div>
        <div className="container-fluid">
       
      <div class="btn-group">
       <button type="button" class="btn-brd dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
       Experiences
        </button>
          <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Experiences</a>
         <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
         <a class="dropdown-item" href="#">Separated link</a>
      </div>
      </div>


      <div class="btn-group">
       <button type="button" class="btn-brd dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
       HTML/CSS
        </button>
          <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Experiences</a>
         <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
         <a class="dropdown-item" href="#">Separated link</a>
      </div>
      </div>


      <div class="btn-group">
       <button type="button" class="btn-brd dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
       Bangalore
        </button>
          <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Experiences</a>
         <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
         <a class="dropdown-item" href="#">Separated link</a>
      </div>
      </div>


      <div class="btn-group">
       <button type="button" class="btn-brd dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
       UI/UX Designer
        </button>
          <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Experiences</a>
         <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
         <a class="dropdown-item" href="#">Separated link</a>
      </div>
      </div>


      <div class="btn-group">
       <button type="button" class="btn-brd dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
       Gender
        </button>
          <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Male</a>
         <a class="dropdown-item" href="#">Female</a>
        
      </div>
      </div>

      <div class="btn-group">
       <button type="button" class="btn-brd dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
       Age
        </button>
          <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Experiences</a>
         <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
         <a class="dropdown-item" href="#">Separated link</a>
      </div>
      </div>

            

        </div>
        </>
    )
}