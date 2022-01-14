import { Movies } from './Movies';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {API} from './global.js';

import {useState, useEffect} from 'react';

export function MovieList() {

  let [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`)
    .then(res => res.json())
    .then(movies => setMovies(movies))
  };

  // const deleteMovie = (id) => {
  //   const remainingMovies = movies.filter((movie, deleteIndex) => deleteIndex !== id);
  //   setMovies([...remainingMovies]);
  // };
  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => getMovies());
  };

  useEffect(getMovies, [])
  
  return (
    <div className="movies-container">
      {movies.map(({ title, poster, rating, summary, id, _id }, index) => (
        <Movies
          deleteButton={<IconButton aria-label="delete" color="error" onClick={() => deleteMovie(_id)}>
            <DeleteIcon />
          </IconButton>}
          title={title} poster={poster} rating={rating} summary={summary} id={_id} key={_id} />
      ))}
    </div>
  );
}
