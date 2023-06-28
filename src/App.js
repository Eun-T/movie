import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import Movie from './Components/Movie/Movie';

function App() {
  let [movie,setMovie] = useState([])
  const getMovie = () => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
      .then(data => data.json())
      .then(data => data.data)
      .then(data => {
        setMovie(data.movies)
      })
  }

  // getMovie()
  console.log("start")

  useEffect(() => {
    console.log("useeffect")
    getMovie()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render = {(props) => (<Home movie={movie} {...props}/>)}></Route>
          <Route exact path='/:id' render = {(props) => (<Movie movie={movie} {...props}/>)}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
