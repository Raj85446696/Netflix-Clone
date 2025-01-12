import React, { useEffect, useRef, useState } from "react";
import "./Titlecard.css";
import cards_data from "../../assets/cards/Cards_data.js";
import { Link } from "react-router-dom";

function Titlecard({ title, category }) {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmE1ZDgyZWU0MjBmMTEyOTA3ODhjM2EzMmYxODU0MyIsIm5iZiI6MTczNTU4ODExMC40MzI5OTk4LCJzdWIiOiI2NzcyZjkwZTk4ZjJmODJmYzQ5MjdlMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9jO-8CDN3aND5tLkAnBcSsxiL7pKKsLhkZynvRFPsA8",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) setApiData(data.results);
      })
      .catch((err) => console.error("Error fetching data:", err));

    // Add scroll listener
    if (cardsRef.current) {
      cardsRef.current.addEventListener("wheel", handleWheel);
    }

    // Cleanup
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]); // Dependency on category to re-fetch when it changes

  // Decide which data to display
  const dataToDisplay = apiData.length > 0 ? apiData : cards_data;

  return (
    <div className="title-cards">
      <h2>{title || "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {dataToDisplay.map((card, index) => (
          <Link key={index} to={`/player/${card.id}`}>
            <div className="card">
              <img
                src={
                  card.poster_path
                    ? `https://image.tmdb.org/t/p/w500${card.poster_path}`
                    : "default_image_url"
                }
                alt={card.title || "No Title"}
              />
              <p>{card.title || "Untitled"}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Titlecard;
