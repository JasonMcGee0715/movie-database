import React, { useState } from "react";
import Cast from "./Cast";

export default function Details({ movie, idx }) {
  const [toggle, SetToggle] = useState(false);

  const handleToggle = () => {
    SetToggle(!toggle);
  };

  return (
    <div>
      {toggle && (
        <div>
          <div>Original Title: {movie.original_title}</div>
          <div>Released: {movie.release_date}</div>
          <div>Summary: {movie.overview}</div>
          <div>Voter Rating: {movie.vote_average}</div>
          <div>Votes Counted: {movie.vote_count}</div>
          <h4>Cast:</h4>
          <Cast movie={movie} index={idx} />
        </div>
      )}
      <button onClick={handleToggle}>More Info</button>
    </div>
  );
}

{
  /* <div>Original Title: {movie.original_title}</div>
      <div>Released: {movie.release_date}</div>
      <div>Summary: {movie.overview}</div>
      <div>Voter Rating: {movie.vote_average}</div>
      <div>Votes Counted: {movie.vote_count}</div>
      <h4>Cast:</h4>
      <Cast movie={movie} index={idx} /> */
}
