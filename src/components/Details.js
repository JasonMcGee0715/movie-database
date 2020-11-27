import React, { useState } from "react";
import "./Details.css";
import Cast from "./Cast";

export default function Details({ movie, idx }) {
  const [toggle, SetToggle] = useState(false);

  const handleToggle = () => {
    SetToggle(!toggle);
  };

  return (
    <div className="details-container">
      {toggle && (
        <div className="toggled-info">
          <div>
            <div>
              <span>Original Title: </span>
              {movie.original_title}
            </div>
            <div>
              <span>Released: </span> {movie.release_date}
            </div>
            <div>
              <span>Summary: </span>
              {movie.overview}
            </div>
            <div>
              <span>Voter Rating: </span>
              {movie.vote_average}
            </div>
            <div>
              <span>Votes Counted: </span>
              {movie.vote_count}
            </div>
          </div>
          <div className="cast-info">
            <h4>Cast: </h4>
            <Cast movie={movie} index={idx} />
          </div>
        </div>
      )}
      <button className="moreInfo-button" onClick={handleToggle}>
        More Info
      </button>
    </div>
  );
}

/* <div>Original Title: {movie.original_title}</div>
      <div>Released: {movie.release_date}</div>
      <div>Summary: {movie.overview}</div>
      <div>Voter Rating: {movie.vote_average}</div>
      <div>Votes Counted: {movie.vote_count}</div>
      <h4>Cast:</h4>
      <Cast movie={movie} index={idx} /> */
