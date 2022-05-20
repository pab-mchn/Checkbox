import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const imageStyle = {
  width: "300px",
  height: "240px",
};

const Episodes = () => {
  const { dataEpisode } = useContext(dataContext);
  return <div>Episodes</div>;
};

export default Episodes;
