import React from 'react';
import {useState,useEffect} from "react";
import axios from "axios";

import {img_500,noPicture} from "../../config/imageConfig";

import "./Starring.css";

const Starring = ({id,media_type}) => {

    const [starring, setStarring] = useState([]);
   

    const fetchStarring = async () =>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=8dd06e7fd045da8064db050b0d9edc02&language=en-US`);
        setStarring (data);
    }

  useEffect(() => {
      fetchStarring();
  }, []);

    return (
      <>
      <h3 className= "title_cast">Cast and Characters</h3>
      <div className="row_starrings">
        {starring.cast && starring.cast.map(
          (credit) =>
          credit.profile_path !== null && (
            <div key = {credit.id}className = 'col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2'>
              <div>
                <img className= 'row_star ' src={credit.profile_path ? `${img_500}${credit.profile_path}` : noPicture}
                alt = "actor"/>
                </div>
                <div className='actor-body'>
                  <h6>{credit.name}</h6>
                  <h4>{credit.character}</h4>
                    </div>
                    </div>
    )
)}
      </div>
      </>
       
    )
}

export default Starring


{/* <div className="row_starrings">
{starring.cast && starring.cast.map(
  (credit) =>
    credit.profile_path !== null && (
      <img
        className= 'row_star '
        src={credit.profile_path ? `${img_500}${credit.profile_path}` : unavailable}
        key={credit.id}
      />
    )
)}
</div> */}

