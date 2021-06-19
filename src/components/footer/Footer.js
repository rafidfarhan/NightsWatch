import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";

const Footer = () => {
    return (
        <>
        <div className = "footer_div">
            <a href = "https://github.com/rafidfarhan">
            <i className="fab fa-github fa-lg icon"></i>
            </a>
            <a href = "https://www.facebook.com/r.farhan.999">
            <i className="fab fa-facebook-f fa-lg icon"></i>
            </a>
            <a href = "https://www.instagram.com/r.farhankhan/">
            <i className="fab fa-instagram fa-lg icon"></i>
            </a>
            <a href ="https://www.linkedin.com/in/rafid-farhan-4129161aa/">
            <i className="fab fa-linkedin-in fa-lg icon"></i>
            </a>
            <a  href = "https://www.behance.net/rfarhankhan">
            <i className="fab fa-behance fa-lg icon"></i>
            </a>

           
            
        </div>

        <div >
            {/* 
             <i className="fas fa-paper-plane fa-lg icon"></i>
            <span className = "copyright">
                <h6>Copyright © Nights Watch 2021</h6>
            </span> */}

            {/* <span className = "developed_by">
                <h6> Developed by Rafid Farhan</h6>
            </span> */}
        </div>

        </>
    )
}

export default Footer
