import React from 'react';

import "./About.css";
//import mydp from "./Images/1.png";
import resume from "./Images/Resume1.pdf";

const About = () => {
    return (
        <div>
             {/* <div style ={{backgroundImage : `url(${mydp})`}} className="col-lg-4 dp">
                 
             </div> */}
             <h5 className = "about_project_head">Details about Project Nights Watch :</h5>

             <div className = "about_website">
                 <ul className = "lang_list">
                     <li>Framework/Library used : React Js, React-Bootstrap, Material-UI </li>
                     <li> Database/API used : <a href= "https://developers.themoviedb.org/3/getting-started/introduction">The Movie DB API</a></li>
                     <li>SourceCode of this project : Github Link</li>
                     <li>My Github : Github Link</li>
                 </ul>
                 
                
                 
                 
             </div>
             <div>
             <iframe className = "pdf_resume" src= {resume} width="90%" height="1132" allowFullScreen ></iframe>
             </div>
        </div>
    )
}

export default About
