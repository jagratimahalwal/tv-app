import React, { useEffect, useState } from "react";
import { SeasonObj } from "../../models/seasons";

interface SeasonProp {
  showId: string;
  showEpisodes: any;
}

const Seasons: React.FC<SeasonProp> = ({ showId, showEpisodes }) => {
  const [seasonData, setSeasonsData] = useState<SeasonObj[]>();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}/seasons`)
      .then((res) => res.json())
      .then((data) => {
        setSeasonsData(data);
      });
  }, [showId]);

  return (
    <div className="grid grid-cols-3 mx-6">
      {seasonData &&
        seasonData.map((season, i) => (
          <div
            key={i}
            className=" cursor-pointer my-6"
            onClick={() => {
              showEpisodes(season.id);
            }}
          >
            <img src={season.image?.medium} alt="season" className="rounded" />
            <div className="flex flex-col ">
              <h2>Season {season.number}</h2>
              <span>Episodes {season.episodeOrder}</span>
              <span>{season.premiereDate}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Seasons;
