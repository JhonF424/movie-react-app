import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import MoviesList from './MoviesList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/peliculas" element={<MoviesList />}>
          <MoviesList />
        </Route>
        <Route path="/blog">
          <MoviesList />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
