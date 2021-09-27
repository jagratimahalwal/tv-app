import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Seasons from "../Seasons";
import { ShowObject } from "../../models/showModel";
import { ImageObj } from "../../models/searchModel";

interface RouteParams {
  showId?: string;
}

const ShowDetails: React.FC<{}> = () => {
  const { showId } = useParams<RouteParams>();
  const [showDetail, setShowDetails] = useState<ShowObject>();
  const [image, setImage] = useState<ImageObj[]>();
  const [isError, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        setShowDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [showId]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}/images`)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.filter((obj: ImageObj) => obj.type === "banner"));
      });
  }, [showId]);

  return (
    <div>
      {isError && (
        <div data-testid="error">
          Something Went wrong, please try again later
        </div>
      )}
      {isLoading && <div data-testid="loading">Loading</div>}
      {!isError && !isLoading && showDetail && (
        <div className={`w-screen h-5/6	 flex flex-col`} data-testid="result">
          {image && image.length > 0 ? (
            <div
              className="w-full xs:h-40 sm:h-56 lg:h-80 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${image[0].resolutions.original.url})`,
              }}
            ></div>
          ) : (
            <div
              className="ml-6 h-80 w-screen  bg-no-repeat bg-contain bg-opacity-70	"
              style={{
                backgroundImage: `url(${showDetail.image.original})`,
              }}
            ></div>
          )}
          <div className=" p-6  text-left">
            <h1 className="my-4">{showDetail.name}</h1>
            <div>
              <span className="border rounded p-2 mt-4 mr-4 bg-gray-300 text-black">
                Ratings : {showDetail.rating.average}{" "}
              </span>
              <span className="border rounded p-2 mt-4 mr-4 bg-gray-300 text-black">
                Status : {showDetail.status}
              </span>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: showDetail.summary }}
              className="mt-4"
            ></p>
          </div>
          {showId && <Seasons showId={showId} />}
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
