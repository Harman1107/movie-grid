import React, { useState } from 'react'
import close from "../Close.png";
import { Flex, Box, Text } from '@chakra-ui/react';
import './Movie.css'



const Movie = ({ movie: { backdrop_path, title, vote_average, id, overview, release_date, vote_count } }) => {

  const [model, setModel] = useState(false);
  function togglePopUp(e) {
    setModel(!model);
  }
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const year = release_date[0] + release_date[1] + release_date[2] + release_date[3];
  const day = release_date[8] + release_date[9];
  let month = release_date[5] + release_date[6];
  if(release_date[5] === '0'){
     month = monthNames[release_date[6]]  
  }
  else{
     month = monthNames[release_date[5] + release_date[6]];
  }

  

  return (
    <div style={{ cursor: "pointer" }} onClick={togglePopUp}>
      <Flex >
        <div className='Box'>
          <div className='center-aligned'>

            <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="movie-img" className='movie-img' />
            <div className='rating'>
              <p className='rating-text'>{vote_average}</p>
            </div>
          </div>
          <Flex flexWrap="wrap" justifyContent="center" style={{ marginTop: "240px" }} >
            <Text maxWidth="280px" alignContent="center" >{title}</Text>
          </Flex>
        </div>
      </Flex>

      {model && (
        <div className="model">
          <div className="overlay"></div>
          <div className="model-content">
            <Flex flexDirection="row" justifyContent="space-between">
              <h4>{title}</h4>
              <button style={{height:"24px", width:"24px", marginTop:"20px"}}>X</button>
            </Flex>
            <Flex flexDirection="row" justifyContent="space-between" className='descp'>
              <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="movie-img" className='descp-img' />
              <Flex flexDirection="column" style={{paddingLeft:"22px"}}>
                <p>{`Release Date: ${month} ${day}, ${year}`}</p>
                <p>{overview}</p>
                <p>{`${vote_average} / 10 (${vote_count} total votes)`}</p>
              </Flex>
            </Flex>
          </div>
        </div>
      )}

    </div>

  )
}

export default Movie