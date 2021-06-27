import React, { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import MovieList from './Components/MovieList'
import { myMovies } from './Components/MovieData';
import AddMovie from './Components/AddMovie';



function App() {
  const [movies, setMovies] = useState(myMovies)
  const handleAdd = (newMovie) => setMovies([...movies, newMovie])

  const [searchText, setSearchText] = useState('')
  const [searchStars, setSearchStars] = useState(1)

  const handleSearchStars = (rate) => setSearchStars(rate)
  const handleSearchText = (e) => setSearchText(e.target.value)

  return (
    <>
      <Search searchText={searchText} searchStars={searchStars} handleSearchStars={handleSearchStars} handleSearchText={handleSearchText} handleAdd={handleAdd} />
      <MovieList movie={movies.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase().trim()) && searchStars <= movie.rating)} />
    </>
  );
}

export default App;