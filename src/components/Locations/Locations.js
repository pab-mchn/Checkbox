import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const imageStyle = {
  width: "300px",
  height: "240px",
};

const Locations = () => {
  const { dataLocation } = useContext(dataContext);

  return dataLocation.map((locations) => {
    return (
      <div className="rotation" key={locations.id}>
        <div className="internal-rotation">
          <div className="front-rotation">
            <img
              style={imageStyle}
              src="https://imgs.search.brave.com/XJPkidVVtqmbaVYzrHRai7s9N8JjkmyJSNrV8offw40/rs:fit:487:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/WkFyNV9NakNudE9O/TExDUzlkUW5nSGFI/TiZwaWQ9QXBp"
              alt=""
            />
            <h3>{locations.name}</h3>
          </div>
          <div className="back-rotation">
            <h1>{locations.name}</h1>
            <p>Created: {locations.created}</p>
            <p>Dimension: {locations.dimension}</p>
            <p>Type: {locations.type}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default Locations;
