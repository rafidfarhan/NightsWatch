import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react';

import {Modal,Button} from 'react-bootstrap';
import './ContentModal.css';
import {img_500,img_300,logoUnavailable,unavailable,unavailableLandscape} from '../../config/imageConfig';


import Starring from "../Starring/Starring";




const ContentModal = (props) => {

  const [content,setContent] = useState([]);
  const [trailer,setTrailer] = useState();
  const [similar,setSimilar] = useState();



  const fetchContent = async () =>{
    const {data} = await axios.get (
        `https://api.themoviedb.org/3/${props.media_type}/${props.id}?api_key=8dd06e7fd045da8064db050b0d9edc02&language=en-US`
        );
        setContent(data);
        
  }
  const fetchSimilar = async () =>{
    const {data} = await axios.get (
        `https://api.themoviedb.org/3/${props.media_type}/${props.id}/similar?api_key=8dd06e7fd045da8064db050b0d9edc02&language=en-US&page=1`
        );
        setSimilar(data.results);
        
  }

  const fetchTrailer = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${props.media_type}/${props.id}/videos?api_key=8dd06e7fd045da8064db050b0d9edc02&language=en-US`
    );

    setTrailer(data.results[0]?.key);
  };

  useEffect(() =>{
      fetchContent();
      fetchTrailer();
      fetchSimilar();
  },[]);

  var hide = "";
  var hide_2 = ""
  var epis = "";
  if (!content.number_of_episodes|| !content.number_of_seasons){
    hide = "hide";
  }
  else{
    epis = "/Episode";
  }
  if (props.media_type === "movie"){
    hide_2 = "hide";
  }




  return (
    <>
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     
    >
      <Modal.Body >
        <div>
        <i className="fas fa-times-circle  fa-lg cross" onClick={props.onHide}></i>
        </div>
        <div style = {{display: "block"}}>
          <div className = 'poster_div col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
          <img className = 'poster ' src = {content.poster_path ? `${img_500}${content.poster_path}` : unavailable}
          alt = "poster"></img>
          </div>
          <div>
          <img className = 'backdrop' src = {content.backdrop_path ? `${img_500}${content.backdrop_path}` : unavailableLandscape}
          alt = "backdrop"></img>
          </div>
     
        <div className = "info_div">
          <h2 className = "content_title">{content.title || content.name} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )</h2>
          <div>
            <h6 className = "tagline">{content.tagline} <span className ="minutes">
            <i className="fas fa-clock" title="clock"></i>
              {content.runtime || content.episode_run_time && content.episode_run_time.slice(0,1).map(
                (time) =>
                time !== null && (
                  time
                )
              )} min{epis}
              </span> 
              </h6>
              <div>
              {content.genres && content.genres.map(
              (genre) =>
              genre.name !== null && (
                <span key = {genre.id} className = "genres">
                  {genre.name}
                </span>
              )
              )}
              </div>

              <div>
              <span className ={`episodes_seasons ${hide}`}>
              {content.number_of_episodes} Episodes
              </span>
              <span className ={`episodes_seasons ${hide}`}>
              Season(s): {content.number_of_seasons} 
              </span>
              </div>
            
          </div>
          <div className="overview">
            {content.overview}
            
          <div className = "logos">
            <div className = "prod_head_div"><h6 className= "prod_heading">Production :</h6></div>
            {content.production_companies && content.production_companies.map(
              (company) =>
              company.name !== null && (
              <span key = {company.id}>
              <img className = "production_logos" src={company.logo_path ? `${img_300}${company.logo_path}` : logoUnavailable}
              alt = {company.name}  />
              </span>
              )
              )}
              </div>

              <div className = {`logos ${hide_2}`}>
              <div className = "prod_head_div" ><h6 className= "prod_heading"> Available in :</h6></div>
                {content.networks && content.networks.map(
                  (company) =>
                  company.name !== null && (
                  <span key = {company.id}>
                  <img className = "production_logos" src={company.logo_path ? `${img_300}${company.logo_path}` : logoUnavailable}
                  alt = {company.name}  />
                  </span>
              )
              )}
              </div>
              </div>
              </div>
            
            
    
        </div>
     
       
        <div className= "starring_div">
        <Starring id = {props.id} media_type = {props.media_type}/>
        </div>
        <Button variant="primary" style={{marginRight: "1%"}} className ="btn-trailer" size="lg"  href={`https://www.youtube.com/watch?v=${trailer}`}>
        <i className="fab fa-youtube" style={{marginRight: "0.1%"}}></i>  Watch Trailer
        </Button>
        <Button variant="primary" className ="btn-trailer" size="lg"  href = {content.homepage}>
          Visit Homepage
        </Button>
        <div style = {{ marginTop: "2%", paddingLeft: "2%"}}><h3 className= "prod_heading">Similar :</h3></div>
        <div className="row_posters">
        {
                similar && similar.slice(0,8).map((sim) =>(
                 <img
                className= 'row_poster row_posterLarge'
                src={sim.poster_path ? `${img_500}${sim.poster_path}` : unavailable}
                alt={sim.name || similar.title}
                key={sim.id}
                />
                ))
             }
        </div>
       
            

        
      </Modal.Body>
    </Modal> 

    </>
  )
}

export default ContentModal

