import React from "react";
import { useHistory } from "react-router-dom";
import SearchBox from "../SearchBox";
import tvIcon from "../../assets/tv.png";

const Header: React.FC<{}> = () => {
  const history = useHistory();

  return (
    <div className="flex flex-row justify-between m-4 h-12 max-h-12">
      <img
        src={tvIcon}
        className="h-8 cursor-pointer"
        alt="tv-icon"
        onClick={() => {
          history.push("/tv-app");
        }}
      />
      <SearchBox />
    </div>
  );
};

export default Header;
