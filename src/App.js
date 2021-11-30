import './App.css';
import React, { useEffect, useState } from "react";
import Pelicula from './pelicula';
import PageWrapper from './pageWrapper';

function App() {
  const [data, setData] = useState([]);
  

  return (
    <PageWrapper>
      <Pelicula titulo={data.titulo}>

      </Pelicula>
    </PageWrapper>
  );
}

export default App;
