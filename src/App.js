import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { Animated } from "react-animated-css";
// import env from "react-dotenv";

export default function App() {
  const [userInput, SetUserInput] = useState("");
  const [movies, SetMovies] = useState([]);

  //
  ///
  //// Movie DB API key
  const REACT_APP_MY_ENV = process.env.REACT_APP_MY_ENV;

  //
  ///
  //// Setting the state that allows for a dynamic search within the api query
  const handleTextChange = (evt) => {
    SetUserInput(evt.target.value);
  };

  //
  ///
  //// Submit button.  When clicked it fetches all movies based on the userInput query.  Then it set the movies state to the data received.
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log("Something happened");
    // console.log(REACT_APP_MY_ENV);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_MY_ENV}&language=en-US&query=${userInput}&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        SetMovies(data.results);
      });
    // console.log(movies);
  };

  return (
    <div className="App">
      <Animated
        animationIn="fadeInDownBig"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="app-container">
          <h1>The Movie DataBase</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label id="searchInput">Search DataBase: </label>
            <input
              type="text"
              name="searchInput"
              id="searchInput"
              placeholder="Title..."
              onChange={handleTextChange}
            ></input>
            <input
              type="submit"
              value="Search"
              style={{ fontFamily: "Big Shoulders Text", letterSpacing: "2px" }}
            />
          </form>
          <Search movies={movies} />
        </div>
      </Animated>
    </div>
  );
}
