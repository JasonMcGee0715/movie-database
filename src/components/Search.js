import React, { useState } from "react";
import Cast from "./Cast";

export default function Search({ movies }) {
  const [toggle, SetToggle] = useState(false);
  const [credits, SetCredits] = useState([]);
  const [cast, SetCast] = useState([]);

  //   const handleToggle = () => {
  //     SetToggle(!toggle);
  //   };

  const handleFetch = (idx) => {
    SetCredits([]);
    SetCast([]);
    let movie = movies[idx];
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
    SetToggle(!toggle);
  };

  return (
    <div>
      {movies.map((movie, idx) => {
        return (
          <div key={idx}>
            <h1 key={idx}>{movie.original_title}</h1>
            {/* <div>ID: {movie.id}</div> */}
            {toggle && (
              <div>
                <div>Original Title: {movie.original_title}</div>
                <div>Released: {movie.release_date}</div>
                <div>Summary: {movie.overview}</div>
                <div>Voter Rating: {movie.vote_average}</div>
                <div>Votes Counted: {movie.vote_count}</div>
                <h4>Cast:</h4>
                <Cast movie={movie} />
              </div>
            )}
            <button onClick={(index) => handleFetch(idx, index)}>
              More Info
            </button>
          </div>
        );
      })}
    </div>
  );
}

// import React, { useState } from "react";

// export default function Search({ movies }) {
//   const [toggle, SetToggle] = useState(false);
//   const [credits, SetCredits] = useState([]);
//   const [cast, SetCast] = useState([]);

//   //   const handleToggle = () => {
//   //     SetToggle(!toggle);
//   //   };

//   const handleFetch = (idx) => {
//     SetCredits([]);
//     SetCast([]);
//     let movie = movies[idx];
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
//     SetToggle(!toggle);
//   };

//   return (
//     <div>
//       {movies.map((movie, idx) => {
//         return (
//           <div key={idx}>
//             <h1 key={idx}>{movie.original_title}</h1>
//             {/* <div>ID: {movie.id}</div> */}
//             {toggle && (
//               <div>
//                 <div>Original Title: {movie.original_title}</div>
//                 <div>Released: {movie.release_date}</div>
//                 <div>Summary: {movie.overview}</div>
//                 <div>Voter Rating: {movie.vote_average}</div>
//                 <div>Votes Counted: {movie.vote_count}</div>
//                 <h4>Cast:</h4>
//                 <ul>
//                   {cast.map((person, idx) => (
//                     <li key={idx}>
//                       {person.name} as {person.character}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <button onClick={(index) => handleFetch(idx, index)}>
//               More Info
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
