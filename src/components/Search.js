import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import SingleContent from "./SingleContent/SingleContent";
import CustomPagination from './/pagination/CustomPagination';
import Showcase from './showcase/Showcase';



const Search = ({searchTerm}) => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();



    const fetchSearch = async () =>{
        if (searchTerm !== ""){
            try {
                const {data} = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=8dd06e7fd045da8064db050b0d9edc02&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`);
                setContent(data.results);
                setNumOfPages(data.total_pages);
              }
              catch (error){
                  console.error(error);
              }
        }
        else{
            setContent([]);
            setNumOfPages(0);
        }
      }

      useEffect(() => {
        window.scroll(0, 0);
        const timeOut = setTimeout (() =>{
            fetchSearch();
        }, 500);

        return () =>{
            clearTimeout(timeOut)
        };
        // eslint-disable-next-line
      }, [searchTerm, page]);



    return (
        <>
        <Showcase type = 'trending' typeOfSearch ="all/week"/>
        <div className="container content-container">
            
        {content && content.map((c) =>(
            <SingleContent 
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
    <div 
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            }}>
    {searchTerm && !content && (
        <h2>No matches</h2>
    )}
    {searchTerm === '' && (
        <h2 style = {{fontFamily: 'Quicksand-Bold', marginBottom: '40vh'}}>-Search for Something-</h2>
    )}
    </div>
          {numOfPages > 1 && (
            <CustomPagination setPage = {setPage} numOfpages= {numOfPages}/>
            )}
    </div>
    </>
       
    );
}

export default Search
