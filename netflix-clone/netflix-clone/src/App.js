import React from "react"
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner url = {requests.fetchNetflixOriginals}/>
      <Row 
      title = "Netfilx Originals" 
      url = {requests.fetchNetflixOriginals}
      isLargeRow 

      />
      <Row title = "Trending Now" url = {requests.fetchTrending}/>
      <Row title = "Top Rated" url = {requests.fetchTopRated}/>
      <Row title = "Action Movies" url = {requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" url = {requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" url = {requests.fetchHorrorMovies}/>
      <Row title = "Documentaries" url = {requests.fetchDocumantaries}/>
      <Row title = "Rowmance Movies" url = {requests.fetchRomanceMovies}/>
      
    </div>
  );
}

export default App;
