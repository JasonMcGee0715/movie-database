import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { Animated } from "react-animated-css";

export default function App() {
  const [userInput, SetUserInput] = useState("");
  const [movies, SetMovies] = useState([]);

  const handleTextChange = (evt) => {
    SetUserInput(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Something happened");
    const API_KEY = "9d0e75c6e81c0b4c9295c1c5ab4c5af1";
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${userInput}&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        SetMovies(data.results);
      });
    // console.log(movies);
  };

  // const handleLog = () => {
  //   console.log(movies);
  // };

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

//
// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       movies: [],
//       userInput: "",
//     };
//   }

//   // https://api.themoviedb.org/3/movie/550?api_key=9d0e75c6e81c0b4c9295c1c5ab4c5af1
//   // https: //api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=%22phantom%22&include_adult=false

//   // https: //api.themoviedb.org/3/movie/76341?api_key={API_KEY}

//   // componentDidMount() {
//   //   console.log("Something happened");
//   //   fetch("http://www.omdbapi.com/?i=tt3896198&apikey=25a54383")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       this.setState({
//   //         movies: data,
//   //       });
//   //       console.log("Movies", this.state.movies);
//   //     });
//   // }

//   handleTextChange = (evt) => {
//     this.setState({
//       userInput: evt.target.value,
//     });
//   };

//   handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log("Something happened");
//     const API_KEY = "9d0e75c6e81c0b4c9295c1c5ab4c5af1";
//     fetch(
//       `https: //api.themoviedb.org/3/movie/76341?api_key=${API_KEY}&query=${this.userInput}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           movies: data,
//         });
//         console.log("Movies", this.state.movies);
//       });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Movie DataBase</h1>
//         <br />
//         <form onSubmit={this.handleSubmit}>
//           <label id="searchInput">Search DataBase: </label>
//           <input
//             type="text"
//             name="searchInput"
//             id="searchInput"
//             onChange={this.handleTextChange}
//           ></input>
//           <button type="submit">Search</button>
//         </form>
//         <Search />
//       </div>
//     );
//   }
// }
