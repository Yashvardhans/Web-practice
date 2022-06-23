import React from "react"
import './App.css';
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Row title = "Netfilx Originals" url = {requests.fetchNetflixOriginals}/>
      <Row title = "Trending Now" url = {requests.fetchTrending}/>
    </div>
  );
}

export default App;
