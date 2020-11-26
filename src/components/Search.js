import React, { useState } from "react";
import "./Search.css";
import Details from "./Details";

export default function Search({ movies }) {
  return (
    <div className="search-container">
      {movies.map((movie, idx) => {
        return (
          <div className="search-Result" key={idx}>
            <h1 key={idx}>{movie.original_title}</h1>
            <Details movie={movie} index={idx} />
          </div>
        );
      })}
    </div>
  );
}
