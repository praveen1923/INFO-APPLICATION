import React from "react";
import ReactDOM from "react-dom";

import  { 
     BrowserRouter as Router,
    Route,
     Link,
    NavLink,
    Switch
} from "react-router-dom";
class project extends React.Component{
    constructor(){
        super();
    }
    render() {
        return(
            <body>
                <div class="heading">
                    <div class="jumbotron text-center" id="heading">
                        <h1 class="myname">Praveenkumar</h1>
                        <p class="myoccupation">Software Developer</p>
                        <ul class="nav nav-pills nav-just" id="navigation">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">
                                    Home
                                </a>
            
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/project">
                                    Project
                                </a>
            
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/youtube">
                                Youtube
                                </a>
            
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/contact">
                                    contact
                                </a>
            
                            </li>
                        </ul>
                </div>  
                        <div class="col-sm-8">
                            <h2 class="myskills">Career objective</h2>
                            <br/>
                            <p class="skills">
                            To be a successful professional in a globally   respected   company   and	to achieve the objectives of the company with	honest	and	fairness	and	to continuously upgrade my knowledge and Skills.
                            </p>
                        </div>
                    </div>
                
<br/>
<div class="container">
    <div class="row">
    <div class="col-sm-6">
        <h2 class="myskills">
        Web application</h2>
        <div>
        <iframe
        class="embed-responsive.item"
        src="https://www.youtube.com/embed/a.x-whzzui"
        frameborder="a"
        allow="accelrate;autoplay; clipboard=write; encrypted-media;gyroscope;picture-in-picture"
        allowfullscreen
        />
        </div>
    </div> 
    <p class="skills" >
    the purpose of the project is to improve the skills</p>
  
        <h2 class="Project Domain and Tools"></h2>
        <p class="skills"></p>
        this application is developed by following programming languages
    
          <ul>
        <li>Frontend - html,css,javascript</li>
        </ul><div>
        <ul class="nav nav pills justify-content-center"></ul>
               <li class="nav-item">
               <a 
               class="nav-link active"
               href={"https://github.com"}
               ></a>
            </li>
        </div>
    </div>
    <div class="container">
    <div class="row">
    <div class="col-sm-6">
        <h2 class="myskills">
        Web application</h2>
        <div>
        <iframe
        class="embed-responsive.item"
        src="https://www.youtube.com/embed/a.x-whzzui"
        frameborder="a"
        allow="accelrate;autoplay; clipboard=write; encrypted-media;gyroscope;picture-in-picture"
        allowfullscreen
        />
        </div>
    </div> 
    <p class="skills" >
    the purpose of the project is to improve the skills</p>
  
        <h2 class="Project Domain and Tools"></h2>
        <p class="skills"></p>
        this application is developed by following programming languages
    
          <ul>
        <li>Frontend - Reactjs,Bootstrap,Javascript</li>
       
        </ul><div>
        <ul class="nav nav pills justify-content-center"></ul>
               <li class="nav-item">
               <a 
               class="nav-link active"
               href={"https://github.com"}
               ></a>
            </li>
        </div>
    <br/>
    <div class="container">
    <div class="row">
    <div class="col-sm-6">
        <h2 class="myskills">
        Web application</h2>
        <div>
        <iframe
        class="embed-responsive.item"
        src="https://www.youtube.com/embed/a.x-whzzui"
        frameborder="a"
        allow="accelrate;autoplay; clipboard=write; encrypted-media;gyroscope;picture-in-picture"
        allowfullscreen
        />
        </div>
    </div> 
    <p class="skills" >
    the purpose of the project is to improve the skills</p>
  
        <h2 class="Project Domain and Tools"></h2>
        <p class="skills"></p>
        this application is developed by following programming languages
    
          <ul>
        <li>backend - python</li>
        </ul><div>
        <ul class="nav nav pills justify-content-center"></ul>
               <li class="nav-item">
               <a 
               class="nav-link active"
               href={"https://github.com"}
               ></a>
            </li>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  </body>
        );
    }
}
export default Home;