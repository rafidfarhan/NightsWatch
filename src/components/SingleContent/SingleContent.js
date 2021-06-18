import {img_500,unavailableLandscape} from "../../config/imageConfig";
import "./SingleContent.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

import ContentModal from "../contentModal/ContentModal";



const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    rating,
    backdrop,
    overview,
    
}) =>{

    // const history = useHistory();
    
    // const handleRoute = () =>{ 
    //     history.push("/contentdetails");
    //     setContentDetailsId(id);
    //     setContentDetailsType(media_type);
    //   }

    const [showModal, setShowModal] = useState(false);

    const openModal = () =>{
        setShowModal(prev=> !prev);
    };

    var show_media_type = "";

    if(window.location.pathname === "/"){
        if(media_type === "movie") {
            show_media_type = "Movie"
        }
        if(media_type === "tv") {
            show_media_type = "TV Series"
        }
    }




    return (
        
        <>
        <div className = 'col-12 col-sm-6 col-md-4 col-lg-4'>
            
            <div className ='movie' onClick = {openModal}>
            <div>
            <img style = {{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"}} src={backdrop ? `${img_500}${backdrop}` : unavailableLandscape}
            alt = {`${title} background`}/>
            </div>
            
            
            
            <div className='movie-body'>
                <h6>{title}</h6>
                
                <div className ={`type`}>{show_media_type}</div>
                <div className = 'rating' >
                <i className="fas fa-star star-color" data-toggle="tooltip" data-placement="bottom" title="Rating"></i>
                    {rating}/10
                </div>
               
            </div>
            </div>

         
        </div>
        <ContentModal 
        id ={id} 
        media_type={media_type} 
        // showModal = {showModal}
        // setShowModal = {setShowModal}
        title = {title}
        date = {date}
        poster = {poster}
        rating = {rating}
        show={showModal}
        overview = {overview}

        onHide={() => setShowModal(false)}
        />

        </>

      
    )
}
export default SingleContent;

//{ 
        
        //     <div className = "col-6 col-sm-6 col-md-4 col-lg-3">
        //         <div className="card cardWidth movie-card">
        //                 <img className="card-img-top poster_length" src={poster ? `${img_500}${poster}` : unavailable}
        //                 alt={title}/>
        //                 <div className="card-body">
        //                 <i className="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer"></i>
                        
        //                     <h5 className="card-title card_title2">{title}</h5>
        //                     <p className="card-text">{media_type}</p>
        //                     <i className="fas fa-star" data-toggle="tooltip" data-placement="bottom" title="Rating"></i>
                            
        //                 </div>
        //             </div>
        //         </div>
            
        
        // }
    