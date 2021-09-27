import React from "react";
import { ShowObject } from "../../models/showModel";

interface showProp {
  show: ShowObject;
  selectShow: any;
}
const MovieCard: React.FC<showProp> = ({ show, selectShow }) => {
  return (
    <React.Fragment>
      <div className="mt-6 ">
        <div className="h-64 max-h-64 w-48 cursor-pointer rounded border-1 border-white transition duration-500 transform hover:scale-110 hover:border-3">
          <img
            className=" max-h-60 object-cover	rounded border-1 border-white "
            src={show.image?.medium}
            alt={show.name}
            onClick={() => selectShow(show.id)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCard;
