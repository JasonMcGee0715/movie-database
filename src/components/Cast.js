import React, { useState, useEffect } from "react";
import "./Cast.css";

export default function Cast({ movie }) {
  const [credits, SetCredits] = useState([]);
  const [cast, SetCast] = useState([]);
  const [toggle, SetToggle] = useState(false);

  //
  ///
  //// When component is loaded it will fetch new data using the id returned from the first fetch. This second fetch brings in the credits so we can access the cast.  We are taking the first 5 cast credits.
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
      {/* Button show hide text */}
      {toggle ? (
        <button onClick={handleToggle}>Hide Cast</button>
      ) : (
        <button onClick={handleToggle}>Show Cast</button>
      )}
      {/* List show/hide */}
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
