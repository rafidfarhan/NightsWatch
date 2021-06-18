import axios from "axios";
import { useEffect, useState } from "react";


import "./Showcase.css";
import {img_500,unavailable} from "../../config/imageConfig";
import ContentModal from "../contentModal/ContentModal";


const Showcase= ({type,typeOfSearch}) =>{
    const [topRated, setTopRated] = useState();

    const fetchTopRated = async () =>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/${type}/${typeOfSearch}?api_key=8dd06e7fd045da8064db050b0d9edc02&language=en-US&page=1`);
        setTopRated (data.results);
    }

  useEffect(() => {
      fetchTopRated();
  }, []);

    return(
      <>
        <div className="row_posters">
        {topRated && topRated.map(
          (movie) =>
            movie.poster_path !== null && (
              <img
                className= 'row_poster row_posterLarge'
                src={movie.poster_path ? `${img_500}${movie.poster_path}` : unavailable}
                alt={movie.name || movie.title}
                key={movie.id}
                />
              
            
            )
        )}
       
      </div>
       
       </>
     
    );
}
export default Showcase;