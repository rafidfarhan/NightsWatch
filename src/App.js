import React from "react";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {useState} from 'react';

import MyNav from "./components/navigation";
import Trending from "./pages/Home/Trending";
import DiscoverMovies from "./pages/Movies/DiscoverMovies";
import DiscoverSeries from "./pages/TvSeries/DiscoverSeries";
import Search from "./components/Search";
import About from "./pages/About/About"





import "./App.css";
import Footer from "./components/footer/Footer";



const App = () => {

    const [searchTerm, setSearchTerm] = useState('');

    

    return (
        <>
        <Router>
        
        <MyNav searchTerm = {searchTerm} setSearchTerm ={setSearchTerm}/>
        {console.log(searchTerm)}
        <Switch>
            <Route path ='/' exact component ={Trending}></Route>
        </Switch>
        <Switch>
            <Route path ='/about' component ={About}></Route>
        </Switch>
        <Switch>
            <Route path ='/movies' component ={DiscoverMovies} ></Route>
        </Switch>
        <Switch>
            <Route path ='/tvseries' component ={DiscoverSeries}></Route>
        </Switch>
        <Switch>
            <Route path ='/search'
            render={(props) => ( <Search {...props} searchTerm = {searchTerm} />)}>
            </Route>

        </Switch>
        
        <Footer/>
     
       
        </Router>
        </>
        
    

    );
}


export default App;