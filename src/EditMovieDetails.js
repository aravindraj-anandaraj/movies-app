import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams, useHistory } from 'react-router-dom';
import { Movies } from './Movies.js';
import {API} from './global.js';

import { useFormik } from "formik";
import { movieValidationSchema } from './AddMovie.js';

export function EditMovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const getMovie = () => {
    fetch(`${API}/movies/${id}`)
    .then(res => res.json())
    .then(data => {setMovie(data)})
  };
  
  useEffect(getMovie, []);

  return movie ? <UpdateMovieDetails movie={movie} /> : "";
}

function UpdateMovieDetails( {movie} ) {

    const { id } = useParams();

    const { handleSubmit, handleBlur, handleChange, touched, errors, values } = 
    useFormik({
      initialValues: movie,
      validationSchema: movieValidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit", values);
        editMovie(values);
      }
    });

    const editMovie = (editedMovie) => {

      console.log("editMovie ", editedMovie);
    fetch(`${API}/movies/${id}`, {
        method: 'PUT',
        body: JSON.stringify(editedMovie),
        headers: {
        "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(() => history.push("/movies"))
    };
    
    let history = useHistory();
    return (
    <div className="edit-movie">
        <form onSubmit={handleSubmit} className="editMovie-container">
            <TextField 
              id="tile" 
              name="title" 
              label="Title" 
              variant="standard" 
              value={values.title} 
              onChange={handleChange} 
              onBlur={handleBlur}
              error={touched.title && errors.title}
              helperText= {touched.title && errors.title ? errors.title : ""}
            />
            <TextField 
              id="poster" 
              name="poster" 
              label="Poster" 
              variant="standard" 
              value={values.poster} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              error={touched.poster && errors.poster}
              helperText={touched.poster && errors.poster ? errors.poster : ""}
            />
            <TextField 
              id="rating" 
              name="rating" 
              label="Rating" 
              variant="standard" 
              value={values.rating} 
              onChange={handleChange} 
              onBlur={handleBlur}
              error={touched.rating && errors.rating}
              helperText={touched.rating && errors.rating ? errors.rating : ""}
            />
            <TextField 
              id="summary" 
              name="summary" 
              label="Summary" 
              variant="standard" 
              value={values.summary} 
              onChange={handleChange} 
              onBlur={handleBlur}
              error={touched.summary && errors.summary}
              helperText={touched.summary && errors.summary ? errors.summary : ""}
            />
            <TextField 
              id="trailer" 
              name="trailer" 
              label="Trailer" 
              variant="standard" 
              value={values.trailer}  
              onChange={handleChange} 
              onBlur={handleBlur} 
              error={touched.trailer && errors.trailer}
              helperText={touched.trailer && errors.trailer ? errors.trailer : ""}
            />
            <Button type="submit" aria-label="add movie" variant="outlined" color="success">
                Save Movie
            </Button>
        </form>
        <div className="updated-preview">
            <Movies title={values.title} poster={values.poster} rating={values.rating} summary={values.summary} id={id} key={id} />
        </div>
    </div>
    );
}