import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';

import {img_500,unavailable,unavailableLandscape} from "../../config/imageConfig";



const ContentDetails = ({contentDetailsId, contentDetailsType}) => {

    const [contentDetails,setContentDetails] = useState();

    const fetchContent = async () =>{
        const {data} =  await axios.get (`https://api.themoviedb.org/3/${contentDetailsType}/${contentDetailsId}?api_key=8dd06e7fd045da8064db050b0d9edc02&language=en-US`);
        
        setContentDetails(data);
        console.log(data);
    }
 
   
        fetchContent();

   
       


    return (
        <div>
            {/* <div>
            <img src ={contentDetails.backdrop_path ? `${img_500}${contentDetails.backdrop_path}` : unavailable }></img>
            </div> */}
            {contentDetailsId}
            {contentDetailsType}
            
        </div>
    )
}

export default ContentDetails
