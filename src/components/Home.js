import { useEffect, useState } from 'react';
import {Link} from "react-router";
import '../App.css';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import logo from '../Logo-img.png'   
import icon from "../search-icon.png"
import axios from 'axios';
import Movie from './Movie.js'

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("")
    useEffect(() => {
      const fetch = async () => {
        if(query!=""){
            const res = await axios(`
            https://api.themoviedb.org/3/search/movie?api_key=ca3928d24fdcda0213e8089a69482cbf&language=en-US&query=${query}&page=1`)
            const data = await res?.data;
            setMovies(data.results);
        }else{
            const res = await axios("https://api.themoviedb.org/3/movie/upcoming?api_key=ca3928d24fdcda0213e8089a69482cbf&language=en-US&page=1")
            const data = await res?.data;
            setMovies(data.results);
        }
      }
      fetch();
    }, [query])
    console.log(movies);

    function handleChange(e){
        setQuery(e.target.value);
    }

  return (
    <Flex flexDirection="column" justifyContent="center" >
      <Flex flexDirection="row" justifyContent="space-between" >
      <img src={logo} className='logo-img' alt="logo"/>
      
      <input type="text" placeholder='Search a Movie' className='search' onChange={handleChange}/>
      </Flex>
      
      <hr></hr>
      <p className='title-text'>Most recent Movies</p>
      <Flex flexWrap='wrap' marginLeft="95px">
        {movies.map((movie) => <Movie movie={movie} key={movie.id}/>)}
      </Flex>
    </Flex>
  )
}

export default Home