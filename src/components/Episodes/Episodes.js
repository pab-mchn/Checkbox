import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const imageStyle = {
  width: "300px",
  height: "240px",
};

const Episodes = () => {
  const { dataEpisode } = useContext(dataContext);

  return dataEpisode.map((episodes) => {
    return (

      <div className="rotation" key={episodes.id}>
        <div className="internal-rotation">
          <div className="front-rotation">
            <img
              style={imageStyle}
              src="https://imgs.search.brave.com/8x3pCRcbGr1yFZA40fqQJ21vM7k9iShM1AeVduZI8NA/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/b1ZWNU1vTlBJUlJs/akZ4UDU5TFRRSGFF/SyZwaWQ9QXBp"
              alt=""
            />
            <h3>{episodes.name}</h3>
          </div>
          <div className="back-rotation">
            <h1>{episodes.name}</h1>
            <p>Episode: {episodes.episode}</p>
            <p>Created: {episodes.created}</p>
            <p>Air Date: {episodes.air_date}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default Episodes;
