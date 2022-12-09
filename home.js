import React from "react";
import ReactDOM from "react-dom";

import  { 
     BrowserRouter as Router,
    Route,
     Link,
    NavLink,
    Switch
} from "react-router-dom";
class Home extends React.Component{
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
                        <div class="col-sm-4">
                            <div class="rounded-circle">
                                <img 
                                src="myphoto.jpg"
                                class="rounded-circle mx-auto d-block"
                                alt="my photo"
                                width="130px"
                                height="150px"
                                />
                            </div>
                           <br/>
                        </div>
                        <div class="col-sm-8">
                            <h2 class="myskills">Career objective</h2>
                            <br/>
                            <p class="skills">
                            To be a successful professional in a globally   respected   company   and	to achieve the objectives of the company with	honest	and	fairness	and	to continuously upgrade my knowledge and Skills.
                            </p>
                        </div>
                    </div>
                </div>
<br/>
<div class="container">
    <div class="row">
    <div class="col-sm-6">
        <h2 class="myskills">Technical skills</h2>
        <br/>
        <ul class="skills">
            <li>
                Front end language-HTML,CSS,javascript,reactjs
            </li>
            <li> back end language -python

            </li>
            <li>
                Database-mysql
            </li>
        </ul>
    </div>
    <div class="skills="col-sm-6>
        <h2 class="myskills"> Internship and certification</h2>
        <br/>
        <ul class="skills">
            <li>
                I Completed internship on front end development
            </li>
            <li>
                I Completed internship on Android App Development in Java
            </li>
        </ul>
    </div>

    <br/><div class="col-sm-12">
        <h2 class="myskills>My projects"></h2>
        <br/>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th> Project domain</th>
                    <th>Programming Languages</th>
                    <th>Project Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Full stack web development</td>
                    <td>HTML,CSS,JS</td>
                    <td>
                        <a href={"https://github.com/"}> Twit App</a>
                    </td>
                </tr>
                <tr>
                    <td>Full stack web development</td>
                    <td>HTML,CSS,JS,Bootstrao,REACTJS</td>
                    <td>
                        <a href={"https://github.com/"}> Info App</a>
                    </td>
                </tr>
                <tr>
                    <td>Full stack web development</td>
                    <td>Python</td>
                    <td>
                        <a href={"https://github.com/"}> Facial Recognition Controlled Smart Banking System</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <br/><div class="col-sm-12">
        <h2 class="myskills">Educational qualification</h2>
        <br/>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th> degree</th>
                    <th>school</th>
                    <th>yop</th>
                    <th>percentage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>B.E(cse)</td>
                    <td>Sns college of technology</td>
                    <td>2021
                    </td>
                    <td>82</td>
                </tr>
                
                <tr>
            
                    <td>12th</td>
                    <td>Marutham matric hr sec school</td>
                    <td>2017
                    </td>
                    <td>78</td>
                </tr>
        
                <tr>
                <tr>
                    <td>10th</td>
                    <td>Vishwabharathi matric hr sec school</td>
                    <td>2015
                    </td>
                    <td>76</td>
                </tr>
                </tr>
            </tbody>
        </table>
    </div>

    </div>
</div>
                </div>
            </body>
        );
    }
}
export default Home;