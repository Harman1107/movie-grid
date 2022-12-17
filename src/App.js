// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router , Route,Routes} from "react-router-dom"
import axios from 'axios';
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails.js";
function App() {

  return (
  <Router>
    <Routes>
      <Route exact path = "/" element = {<Home/>} /> 
      <Route path="/:id" element = {<MovieDetails/>} />
    </Routes>
  </Router>
  );
}

export default App;
