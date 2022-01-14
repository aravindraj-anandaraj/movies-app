import { Counter } from "./Counter";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';
import { Card } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

import EditIcon from '@mui/icons-material/Edit';

export function Movies({ deleteButton, title, poster, rating, summary, id }) {
  const styles = { color: rating > 8 ? "green" : "red", fontSize: "18px" };
  const history = useHistory();

  return (
    <Card className="movie">
      {/* <div className="movie"> */}
        <CardMedia
          component="img"
          image={poster}
          alt={title}
        />
        {/* <img src={poster} alt={title} /> */}
        <div className="movie-details">
          <div className="movie-spec">
            <Accordion className="accordion">
            <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
            <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>{summary}</Typography>
            </AccordionDetails>
            </Accordion>
            <IconButton 
              color="primary" 
              aria-label="movie details" 
              onClick={ () => history.push(`/movies/${id}`)}>
              <InfoIcon/>
            </IconButton>
            <IconButton 
              color="secondary" 
              aria-label="edit movie details" 
              onClick={ () => history.push(`/movie/edit/${id}`)}>
              <EditIcon/>
            </IconButton>
            <div>
              {deleteButton}
            </div>
          </div>
          <Counter rating={<p style={styles}>⭐<span>{rating}/10</span></p>} />
        </div>
      {/* </div> */}
    </Card>
  );
}
