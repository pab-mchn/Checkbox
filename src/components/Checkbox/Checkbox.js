import Characters from "../Characters/Characters";
import Locations from "../Locations/Locations";
import Episodes from "../Episodes/Episodes";
import { useState } from "react";

const Checkbox = () => {
  const [checkedCharacters, setCheckedCharacters] = useState(false);
  const [checkedLocations, setCheckedLocations] = useState(false);
  const [checkedEpisodes, setCheckedEpisodes] = useState(false);

  return (
    <>
      <form>
        <input
          type="checkbox"
          name="characters"
          checked={checkedCharacters}
          onChange={(e) => setCheckedCharacters(e.target.checked)}
        />
        <label htmlFor="characters">Characters</label>

        <input
          type="checkbox"
          name="locations"
          checked={checkedLocations}
          onChange={(e) => setCheckedLocations(e.target.checked)}
        />
        <label htmlFor="locations">Locations</label>

        <input
          type="checkbox"
          name="episodes"
          checked={checkedEpisodes}
          onChange={(e) => setCheckedEpisodes(e.target.checked)}
        />
        <label htmlFor="episodes">Episodes</label>
      </form>
      {checkedCharacters ? <Characters /> : ""}
      {checkedLocations ? <Locations /> : ""}
      {checkedEpisodes ? <Episodes /> : ""}
    </>
  );
};

export default Checkbox;
