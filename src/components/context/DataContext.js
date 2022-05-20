import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [dataLocation, setDataLocation] = useState([]);
  const [dataEpisode, setDataEpisode] = useState([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((res) =>
      setDataCharacters(res.data.results)
    );
  }, []);
  console.log(dataCharacters);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/location").then((res) =>
      setDataLocation(res.data.results)
    );
  }, []);
  console.log(dataLocation);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/episode").then((res) =>
      setDataEpisode(res.data.results)
    );
  }, []);
  console.log(dataEpisode);

  return (
    <dataContext.Provider
      value={{
        dataCharacters,
        setDataCharacters,
        dataLocation,
        setDataLocation,
        dataEpisode,
        setDataEpisode,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
