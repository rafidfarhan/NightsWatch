import React, {useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


import SingleSeries from "../../components/SingleContent/SingleContent";
import CustomPagination from '../../components/pagination/CustomPagination';
import Genres from '../../components/Genres/Genres';
import useGenre from '../../hooks/useGenre'
import Showcase from '../../components/showcase/Showcase';



const DiscoverSeries = () => {

    const [page, setPage] = useState(1);
    const [movies, setMovie] = useState([]);
    const [numOfpages, setNumOfpages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);


    const fetchSeries = async () =>{
        const {data} = await axios.get (
            `https://api.themoviedb.org/3/discover/tv?api_key=8dd06e7fd045da8064db050b0d9edc02&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
            );
            //console.log(data.results);
            setMovie(data.results);
            setNumOfpages(data.total_pages);

    }

    useEffect(() =>{
        fetchSeries();
    },[page,genreforURL]);

    return (
        <>
        <Showcase type ="tv" typeOfSearch ="top_rated" />
        <div className= 'container' style={{marginTop: "1vh"}}>
        <div  style={{
                paddingLeft : "2vw"
            }}>
            <Genres
            type = "tv"
            selectedGenres = {selectedGenres}
            setSelectedGenres = {setSelectedGenres}
            genres = {genres}
            setGenres = {setGenres}
            setPage = {setPage}
            />
            </div>
             </div>
            <div className=" container content-container">
             {
                movies && movies.map((c) =>(
                    <SingleSeries
                    key = {c.id} id ={c.id} 
                    poster = {c.poster_path} 
                    backdrop = {c.backdrop_path}
                    title = {c.name || c.title} 
                    date = {c.first_air_date || c.release_date}
                    media_type = {'tv'}
                    rating = {c.vote_average}
                    />

                ))
             }
             </div>
             
             {numOfpages > 1 &&(
             <CustomPagination setPage = {setPage} numOfpages= {numOfpages}/>
             )}
       
        </>
    )
}

export default DiscoverSeries;
