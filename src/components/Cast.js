import React, { useState, useEffect } from "react";
import "./Cast.css";

export default function Cast({ movie }) {
  const [credits, SetCredits] = useState([]);
  const [cast, SetCast] = useState([]);
  const [toggle, SetToggle] = useState(false);

  //
  ///
  //// When Cast button is pressed it will fetch new data using the id returned from the first fetch. This second fetch brings in the credits so we can access the cast.  We are taking the first 5 cast credits.
  // const handleCast = () => {
  //   let id = movie.id;
  //   // console.log(id);
  //   const API_KEY = process.env.REACT_APP_MY_ENV;
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       SetCredits(data.cast);
  //     });

  //   const size = 5;
  //   const items = credits.slice(0, size);
  //   SetCast(items);

  //   console.log(cast);
  // };

  useEffect(() => {
    let id = movie.id;
    const API_KEY = process.env.REACT_APP_MY_ENV;
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
  }, [toggle]);

  const handleToggle = () => {
    SetToggle(!toggle);
  };

  return (
    <div>
      <button onClick={handleToggle}>Show Cast</button>
      {toggle && (
        <ul className="ul-list">
          {cast.map((person, idx) => {
            return (
              <li key={idx}>
                {person.name} as {person.character}
              </li>
            );
          })}
        </ul>
      )}
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
