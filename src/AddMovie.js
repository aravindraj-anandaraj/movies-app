import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import {API} from './global.js';

import { useFormik } from "formik";
import * as yup from 'yup';

export const movieValidationSchema = yup.object({
  title: yup
  .string()
  .required("Why not fill this title? 😉"),
  poster: yup
  .string()
  .required("Why not fill this poster? 😉")
  .min(5, "Need a bigger poster"),
  rating: yup
  .number() 
  .required("Why not fill this rating? 😉")
  .min(1, "Need a better rating 😅")
  .max(10, "Need a better rating 😅"),
  summary: yup
  .string()
  .required("Why not fill this summary? 😉")
  .min(15, "Need a better summary 😅"),
  trailer: yup
  .string()
  .required("Why not fill this trailer? 😉")
  .min(5, "Need a bigger trailer")
});

export function AddMovie() {

  const { handleSubmit, handleBlur, handleChange, touched, errors, values } = 
    useFormik({
      initialValues: {
        title: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: ""
      },
      validationSchema: movieValidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit", values);
        addMovie(values);
      }
    });

  const addMovie = (newMovie) => {
    // 1. POST method
    // 2. Body data & JSON data
    // 3. Header JSON data

    fetch(`${API}/movies`, {
      method: 'POST',
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => history.push("/movies"))
  };

  let history = useHistory();
  return (
    <div className="add-movie">
        <form onSubmit={handleSubmit} className="addMovie-container">
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
                Add Movie
            </Button>
        </form>
    </div>
  );
}
