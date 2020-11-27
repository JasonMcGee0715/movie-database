import React, { useState, useEffect } from "react";
import "./Cast.css";

export default function Cast({ movie }) {
  const [credits, SetCredits] = useState([]);
  const [cast, SetCast] = useState([]);

  //   useEffect(() => {
  //     // SetCredits([]);
  //     // SetCast([]);
  //     // let movie = movies[idx];
  //     let id = movie.id;
  //     // console.log(id);

  //     const API_KEY = "9d0e75c6e81c0b4c9295c1c5ab4c5af1";
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         SetCredits(data.cast);
  //       });

  //     const size = 5;
  //     const items = credits.slice(0, size);
  //     SetCast(items);

  //     console.log(cast);
  //   }, []);

  const handleCast = () => {
    let id = movie.id;
    // console.log(id);

    const API_KEY = "9d0e75c6e81c0b4c9295c1c5ab4c5af1";
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        SetCredits(data.cast);
      });

    const size = 5;
    const items = credits.slice(0, size);
    SetCast(items);

    console.log(cast);
  };

  return (
    <div>
      <button onClick={handleCast}>Show Cast</button>
      <ul className="ul-list">
        {cast.map((person, idx) => {
          return (
            <li key={idx}>
              {person.name} as {person.character}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// import React, { Component } from "react";

// export default class Cast extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       credits: [],
//       cast: []
//     };
//   }
// componentDidMount() {

// }

//   render() {
//     return <div></div>;
//   }
// }
