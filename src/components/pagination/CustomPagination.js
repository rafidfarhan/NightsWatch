import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        fontFamily : 'Quicksand',
        color: 'red',
    },
    ul: {
        fontFamily : 'Quicksand',
        color: 'red',
    },
})




const CustomPagination = ({setPage, numOfpages = 10}) => {

    const classes = useStyles();

    const handlePageChange = (page) =>{
        setPage(page);
        if (window.location.pathname === "/"){
            window.scroll(0,250);
            //window.scroll(0,100*window.innerHeight/100);
        }
        else{
            window.scroll(0,250);
        }
    }
    return (
        
        <div 
        style={{
            marginBottom: "5vh", 
            marginTop: "5vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontFamily: "Quicksand"
            }}>
            
            <Pagination 
            className = {classes.root}
            count = {numOfpages} 
            onChange = {(e)=> handlePageChange(e.target.textContent)} 
            size="large"
            hideNextButton
            hidePrevButton
             />
           
        </div>
    )
}

export default CustomPagination
