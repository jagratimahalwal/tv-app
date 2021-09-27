import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "../MovieCard";
import { Search } from "../../models/searchModel";
import house from "../../assets/house.png";

interface RouteParams {
  name?: string;
}

const SearchResults: React.FC<{}> = () => {
  const { name } = useParams<RouteParams>();
  const [searchResults, setResults] = useState<Search[]>();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  }, [name]);

  const selectShow = (id: number): void => {
    history.push(`/show/${id}`);
  };

  return (
    <div className="mx-4">
      <div className="grid xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
        {searchResults &&
          searchResults.map((show, i) => (
            <MovieCard
              show={show.show}
              key={i}
              selectShow={(id: number) => selectShow(id)}
            />
          ))}
      </div>
      <div>
        {searchResults && <div className="text-white">{name} not found!!</div>}
      </div>
      <button
        onClick={() => history.push("/tv-app")}
        className="my-4 bg-white rounded p-4 text-black flex flex-row justiify-between items-center"
      >
        <img src={house} alt={"home"} className="mr-2" />
        Home
      </button>
    </div>
  );
};

export default SearchResults;
