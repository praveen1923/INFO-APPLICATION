import React from "react";
import ReactDOM from "react-dom";

import  { 
     BrowserRouter as Router,
    Route,
     Link,
    NavLink,
    Switch
} from "react-router-dom";
class youtube extends React.Component{
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
        </div></div></div></div>
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
            </div></div></div></div>
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
                </div></div>
                </div></div></div>
            
        
                </body>
        );
    }
}
        export default youtube;