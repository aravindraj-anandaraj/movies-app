import { useParams, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import {API} from './global.js';

import {useState, useEffect} from 'react';

export function MovieDetails() {
  const { id } = useParams();

  // Fetch movie by id

  let [movie, setMovie] = useState([]);

  const getMovie = () => {
    fetch(`${API}/movies/${id}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  };
  
  useEffect(getMovie, [])

  const { title, rating, summary, trailer } = movie;
  const history = useHistory();

  return (
      <div>
          <div className="back-button">
            <Button aria-label="add movie" variant="outlined" color="primary" onClick={() => history.goBack()}>Back</Button>
          </div>
          <div className="movie-details-2">
            <div className="movie-details-video">
                <iframe width="100%" height="450px" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="movie-details-spec">
                <h1>{title}</h1>
                {<p>⭐<span>{rating}/10</span></p>}
                <div>{summary}</div>
            </div>
          </div>
      </div>
  );
}
