import axios from 'axios'
import React from 'react'

import {useEffect,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Genres.css';
import { Chip } from '@material-ui/core';

import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    customChip: {
        borderRadius: 2,
        fontFamily : 'Quicksand-Bold',
    },
    customSelectedChip: {
        borderRadius: 2,
        fontFamily : 'Quicksand-Bold',
        color : 'white',
        backgroundColor :'#fcc70a',
        '&:hover' :{
            backgroundColor : '#fed136',
        }
    }
})

const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres, 
    setPage
}) => {

    const classes = useStyles();

    const handleAdd = (genre) =>{
        setSelectedGenres([...selectedGenres,genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };
    

    const fetchGenres = async () =>{
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=8dd06e7fd045da8064db050b0d9edc02&language=en-US`
        );
        setGenres(data.genres);
    }

    useEffect (() =>{
        fetchGenres();

        return () =>{
            setGenres({});
        };
    },[])

 
    return (
        <div className = "chipsDiv">
            {selectedGenres && selectedGenres.map((genre) => (
            <Chip className ={classes.customSelectedChip}
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            color = "primary"
            clickable
            onDelete={() => handleRemove(genre)}
            />
      ))}

          {genres && genres.map((genre) => (
            <Chip 
            className ={classes.customChip}
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            clickable
            onClick={() => handleAdd(genre)}
            />
      ))}
        </div>
    )
}

export default Genres
