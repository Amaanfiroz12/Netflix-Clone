import Banner from "./Banner"
import './App.css';
import Row from './Row';
import requests from './requests';
import React from "react";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
     
      <Row title="Netflix Originals"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies} />
      <Row title="TopRated Movies"  fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Trending Movies"  fetchUrl={requests.fetchTrending} />
      <Row title="Documentaries"  fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies} />

    </div>
  );
}

export default App;
