import './App.css';
import {useState} from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { Home } from './Home';
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';
import { MovieDetails } from './MovieDetails';
import { EditMovieDetails } from './EditMovieDetails';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { TicTacToe } from './TicTacToe';
import { AddColor } from './AddColor';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { NotFoundHandler } from './NotFoundHandler';
import { BasicForm } from './BasicForm';

function App() {

  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{minHeight: '100vh', minWidth: '100vh', borderRadius: '0px'}} elevation={3} >
      <div className="App">
        <AppBar position="static" className="AppBar" color="primary">
          <Toolbar>
            <Button color="inherit" onClick={() => history.push('/')}>Home</Button>
            <Button color="inherit" onClick={() => history.push('/movies')}>Movies</Button>
            <Button color="inherit" onClick={() => history.push('/movie/add')}>Add Movies</Button>
            <Button color="inherit" onClick={() => history.push('/films')}>Films</Button>
            <Button color="inherit" onClick={() => history.push('/add-color')}>Add color</Button>
            <Button color="inherit" onClick={() => history.push('/tic-tac-toe')}>TicTacToe</Button>
            <Button 
              sx={{ marginLeft: 'auto' }}
              startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              color="inherit" 
              onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "Dark" : "Light"} Mode
            </Button>
          </Toolbar>
        </AppBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>
            <Route path="/movie/add">
              <AddMovie />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/movie/edit/:id">
              <EditMovieDetails />
            </Route>
            <Route exact path="/movies">
              <MovieList />
            </Route>
            <Route path="/add-color">
              <AddColor />
            </Route>
            <Route path="/tic-tac-toe">
              <TicTacToe />
            </Route>
            <Route exact path="/basic-form">
              <BasicForm />
            </Route>
            <Route path="**">
              <NotFoundHandler />
            </Route>
          </Switch>
      </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
