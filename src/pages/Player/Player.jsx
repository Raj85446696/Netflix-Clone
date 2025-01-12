import React, { useState, useEffect } from "react";
import "./Player.css";
import back_icon from "../../assets/back_arrow_icon.png";
import { useParams } from "react-router-dom";

function Player() {
  const { id } = useParams(); // Extract id from the URL params
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmE1ZDgyZWU0MjBmMTEyOTA3ODhjM2EzMmYxODU0MyIsIm5iZiI6MTczNTU4ODExMC40MzI5OTk4LCJzdWIiOiI2NzcyZjkwZTk4ZjJmODJmYzQ5MjdlMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9jO-8CDN3aND5tLkAnBcSsxiL7pKKsLhkZynvRFPsA8"
    },
  };

  useEffect(() => {
    // Fetch the trailer data using the correct id
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const trailer = data.results[0];
          setApiData({
            name: trailer.name || "Untitled",
            key: trailer.key || "",
            published_at: trailer.published_at || "Unknown Date",
            type: trailer.type || "Unknown Type",
          });
        } else {
          console.error("No video results found.");
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]); // Add id as dependency to re-fetch on id change

  return (
    <div className="player">
      <a href="/" className="back-link">
        <img src={back_icon} alt="Back Icon" />
      </a>
      {apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          frameBorder="0"
          title="Trailer"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}

      <div className="player-info">
        <p>Published At: {apiData.published_at}</p>
        <p>Title: {apiData.name}</p>
        <p>Type: {apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
