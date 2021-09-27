import React, { useState, useEffect } from "react";
import { Episodes } from "../../models/episodeModel";

interface EpisodeProp {
  seasonId?: string;
  hideEpisodes: any;
}

const EpisodesList: React.FC<EpisodeProp> = ({ seasonId, hideEpisodes }) => {
  const [data, setData] = useState<Episodes[]>();

  useEffect(() => {
    seasonId &&
      fetch(`https://api.tvmaze.com/seasons/${seasonId}/episodes`)
        .then((res) => res.json())
        .then((data) => setData(data));
  }, [seasonId]);

  return (
    <div className="m-4">
      <button
        onClick={() => hideEpisodes()}
        className="bg-white rounded px-4 py-2 text-black font-xl"
      >
        Back to Seasons
      </button>
      {data &&
        data.map((episode, i) => (
          <div className="flex xs:flex-col sm:flex-col lg:flex-row" key={i}>
            {episode.image?.medium && (
              <img
                src={episode.image?.medium}
                alt={`episode-${episode.id}`}
                className="rounded my-4"
              />
            )}
            <div className="ml-4 flex flex-col">
              <span>Episode {episode.number}</span>
              <span>{episode.name}</span>
              <p
                dangerouslySetInnerHTML={{ __html: episode.summary }}
                className="mt-2"
              ></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EpisodesList;
