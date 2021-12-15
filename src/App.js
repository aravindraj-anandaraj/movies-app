import logo from './logo.svg';
import './App.css';

function App() {
  const movies = [
    {
      title: 'The Amazing Spider-Man',
      poster: 'https://flxt.tmsimg.com/assets/p8548776_p_v13_bc.jpg',
      rating: '6.9/10',
      summary: 'After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.'
    },
    {
      title: 'Spider-Man: Homecoming',
      poster: 'https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_FMjpg_UX1000_.jpg',
      rating: '7.4/10',
      summary: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.'
    },
    {
      title: 'Spider-Man',
      poster: 'https://images.moviesanywhere.com/e84b2c6e0de5278f8a00a8fedf73d60b/367910a3-05da-4ad5-8ef3-317708a1ca48.jpg',
      rating: '7.3/10',
      summary: 'When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.'
    },
    {
      title: 'Spider-Man: Into the Spider-Verse',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15Qk_nERnp1yp0g_eudjbDow_39q_hbBYNqrDLOztG-tO-vGQ',
      rating: '8.4/10',
      summary: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.'
    }
  ]
  return (
    <div className="App">
      {movies.map(({ title, poster, rating, summary }) => (
        <Movies title={title} poster={poster} rating={rating} summary={summary} />
      ))}
    </div>
  );
}

function Movies({ title, poster, rating, summary }) {
  return (
    <div className="movie">
      <img src={poster} alt={title}/>
      <div className="movie-spec">
        <h4>{title}</h4>
        <p>⭐<span>{rating}</span></p>
      </div>
      <p><span>Summary : </span>{summary}</p>
    </div>
  )
}

export default App;
