import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './pageWrapper';
//import jsonMovies from './Movies.json';
import Pagination from './Paginacion';
import { useEffect, useState } from 'react';
function App() {
  const [actualPage, setActualPage] = useState(1);
  const [movies, setMovies] = useState([]);
  //let movies = jsonMovies;

  useEffect(() => {
    searchMovie();
  });

  const searchMovie = async () => {
    const url = 'https://lucasmoy.dev/data/react/peliculas.json';


    let response = await fetch(url, {
      "method": 'GET',
      "mode": 'no-cors',
      "headers": {
        "Accept": 'application/json',
        "Content-type": 'application/json'
      }
    })
    let json = await response.json();
    setMovies(json);

  }


  /**
   * A la página activa (@const actualPage), se le resta 1, y el resultado se multiplica 
   * por la cantidad de películas que se desea mostrar, usando la @function .slice()
   * siendo el resultado el primer valor, y para el segundo solo se multiplica la 
   * @constant actualPage por la cantidad de películas que se quiere mostrar.
   */
  // movies = movies.slice((actualPage - 1) * 3, actualPage * 3);

  function getTotalPages() {
    let totalMovies = movies.length;
    console.log(totalMovies);
    return Math.ceil(totalMovies / 3);
  }

  return (
    <PageWrapper>
      {/* No se utiliza función flecha para el MAP, puesto que genera un error
          de key única en los nodos child del componente, por ende, se tuvo que 
          utilizar una función anónima para definir un 'i' que le asignara el ID 
          único a cada nodo. */}
      {movies.map(function (movies, i) {
        return <Pelicula key={i} titulo={movies.titulo} calificacion={movies.calificacion} img={movies.img} director={movies.director} actores={movies.actores} fecha={movies.fecha} duracion={movies.duracion} >
          {movies.descripcion}
        </Pelicula>
      })}

      <Pagination page={actualPage} total={getTotalPages()} onChange={(page) => {
        setActualPage(page);
      }} />
    </PageWrapper>
  );
}

export default App;
