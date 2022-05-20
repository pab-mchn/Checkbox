import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const Characters = () => {
  const { dataCharacters } = useContext(dataContext);

  return dataCharacters.map((characters) => {
    return (
      <div className="rotation" key={characters.id}>
        <div className="internal-rotation">
          <div className="front-rotation">
            <img src={characters.image} alt="" />
          </div>
          <div className="back-rotation">
            <h1>{characters.name}</h1>
            <p>Status: {characters.status}</p>
            <p>Species: {characters.species}</p>
            <p>Gender: {characters.gender}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default Characters;
