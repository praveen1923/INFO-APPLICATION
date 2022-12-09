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
                <div class="heading"></div>
                    <div class="jumbotron text-center" id="heading"></div>
                        <h1 class="myname">Praveenkumar</h1>
                        <p class="myoccupation">Software Developer</p>
                        <ul class="nav nav-pills nav-just" id="navigation"></ul>
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
                
                        <div class="form-group form-lg"></div>
                            <label class="skills" for="body">
                                Name
                            </label>
                            <input
                            type="text"
                            value="send"
                            id="navigation"
                            class="btn btn-primary
                            /></

                            <div class="form-group form-group-group-lg"
                            <label class="skills" for="body">
                            subject
                            </label>
                            <input
                            type="text"
                            value="send"
                            id="navigation"
                            class="btn btn-primary
                            /></div>

                            <div class="form-group form-group-lg"
                            <label class="skills" for="body">
                            your message
                            </label>
                            
                            <input
                            type="submit"
                            value="send"
                            id="navigation"
                            class="btn btn-primary
                            />

                            </form>
                        
                
    
            
        );
    }
}
</body>
 export default contact;