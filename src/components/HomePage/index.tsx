import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MovieCard from "../MovieCard";
import RowWrapper from "../Row";
import { ShowObject } from "../../models/showModel";

const HomePage: React.FC<{}> = () => {
  const [listOfShow, setListOfShows] = useState<ShowObject[]>();
  const [topTenShows, setTopTenShows] = useState<ShowObject[]>();
  const [isError, setError] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setListOfShows(data);
        setTopTenShows(
          data
            .filter((show: ShowObject) => show.rating.average)
            .sort((a: ShowObject, b: ShowObject) =>
              a.rating.average > b.rating.average ? -1 : 1
            )
            .slice(0, 20)
        );
      })
      .catch((error) => setError(true));
  }, []);

  const selectShow = (id: number): void => {
    history.push(`/show/${id}`);
  };

  return (
    <div className="mt-6 mx-6 p-4">
      {isError && (
        <h2 data-testid="error">Something went wtong. Please try again</h2>
      )}
      {!isError && (
        <div data-testid="result">
          <RowWrapper title={"Top rating"}>
            {topTenShows &&
              topTenShows.map((show, i) => (
                <MovieCard
                  show={show}
                  key={i}
                  selectShow={(id: number) => selectShow(id)}
                />
              ))}
          </RowWrapper>

          <RowWrapper title={"Science-Fiction"}>
            {listOfShow &&
              listOfShow
                .filter((show) => show.genres.includes("Science-Fiction"))
                .map((show, i) => (
                  <MovieCard
                    show={show}
                    key={i}
                    selectShow={(id: number) => selectShow(id)}
                  />
                ))}
          </RowWrapper>

          <RowWrapper title={"Drama"}>
            {listOfShow &&
              listOfShow
                .filter((show) => show.genres.includes("Drama"))
                .map((show, i) => (
                  <MovieCard
                    show={show}
                    key={i}
                    selectShow={(id: number) => selectShow(id)}
                  />
                ))}
          </RowWrapper>

          <RowWrapper title={"Thriller"}>
            {listOfShow &&
              listOfShow
                .filter((show) => show.genres.includes("Thriller"))
                .map((show, i) => (
                  <MovieCard
                    show={show}
                    key={i}
                    selectShow={(id: number) => selectShow(id)}
                  />
                ))}
          </RowWrapper>
        </div>
      )}
    </div>
  );
};

export default HomePage;
