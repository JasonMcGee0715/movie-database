import React from "react";
import "./Search.css";
import Details from "./Details";
import { Animated } from "react-animated-css";

export default function Search({ movies }) {
  return (
    <div className="search-container">
      {movies.map((movie, idx) => {
        return (
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOutRight"
            isVisible={true}
            key={idx}
          >
            <div className="search-Result">
              <div className="inner-result">
                <span key={idx}>{movie.original_title}</span>
                <Details movie={movie} index={idx} />
              </div>
            </div>
          </Animated>
        );
      })}
    </div>
  );
}
