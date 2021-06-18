import React, { useState } from "react";

import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useHistory } from "react-router-dom";

import "./MyNav.css";


import { fade, makeStyles } from '@material-ui/core/styles';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
    fontFamily : 'Quicksand',
    textDecoration : 'none !important',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));




const MyNav = ({searchTerm, setSearchTerm}) => {


  const history = useHistory();

  const handleRoute = () =>{ 
      history.push("/search");
    }


  const classes = useStyles();

  const [navbar,setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 90){
      setNavbar (true);
    }
    else{
      setNavbar(false);
    }
  }

  
  window.addEventListener('scroll',changeBackground);

  
    return (
      <>
      
        <Navbar className = {navbar ? 'fullNav active' : 'fullNav'} expand="lg" sticky="top">
  <Navbar.Brand onClick = {()=> window.scroll(0,0)} to="/" className={navbar ? 'logo logo-transition' : 'logo'}>Nights Watch</Navbar.Brand>
  <Navbar.Toggle className = "burger-icon"aria-controls="basic-navbar-nav" >
      <FontAwesomeIcon
        icon={faBars}  color ="white" size="lg"
      />
   </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="/" exact>
        <Nav.Link className= {navbar ? 'nav-links nav-links-transition' : 'nav-links'}>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
        <Nav.Link  className= {navbar ? 'nav-links nav-links-transition' : 'nav-links'} >About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/movies">
        <Nav.Link  className= {navbar ? 'nav-links nav-links-transition' : 'nav-links'}>Movies</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/tvseries">
        <Nav.Link  className= {navbar ? 'nav-links nav-links-transition' : 'nav-links'} >TV Series</Nav.Link>
      </LinkContainer>
      
    </Nav>
    
    <div className={classes.search} onClick = {handleRoute}>
            <div className={classes.searchIcon}>
              <FontAwesomeIcon icon = {faSearch} size="lg" className = {navbar ? 'search-icon-scrolled' : 'search-icon'} />
            </div>
            <InputBase
              placeholder="What are you looking for?"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange = {e => setSearchTerm(e.target.value)}
              
            />
          </div>
         
  </Navbar.Collapse>
</Navbar>
      
      </>
      
      
      );

}
export default MyNav;
