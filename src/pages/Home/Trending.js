import axios from "axios";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import SingleTrending from "../../components/SingleContent/SingleContent";
import CustomPagination from '../../components/pagination/CustomPagination';

import "./Trending.css";
import Showcase from "../../components/showcase/Showcase";

const Trending = ()=>{
    const [page,setPage] = useState(1);
    const [trendingMovies,setTrending]= useState([]);

    
    const fetchTrending = async () =>{
        const {data}= await axios.get (`https://api.themoviedb.org/3/trending/all/week?api_key=8dd06e7fd045da8064db050b0d9edc02&page=${page}`
        );
        //console.log(data);
        setTrending (data.results);

    }
    useEffect(() =>{
        fetchTrending();
    },[page]);

    return (
        <>
         <Showcase type ="trending" typeOfSearch ="all/day"/>
         
        <div className = "container trending-div">
            <div className = 'content-container'>
                {trendingMovies && trendingMovies.map((c) =>(
                    <SingleTrending 
                    key = {c.id} id ={c.id} 
                    poster = {c.poster_path} 
                    backdrop = {c.backdrop_path} 
                    title = {c.name || c.title} 
                    date = {c.first_air_date || c.release_date}
                    media_type = {c.media_type}
                    rating = {c.vote_average}
                    />

                ))
            }
           
            </div>
            
                <CustomPagination setPage = {setPage}/>
          
            
        </div>
    
    
    
    </>
   

    );

}
export default Trending;