import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import searchIcon from "../../assets/magnifying-glass.png";

const SearchBox: React.FC<{}> = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const searchShow = () => {
    const params = new URLSearchParams();
    if (search) {
      setSearch(search.replace(/[^a-zA-Z0-9]/g, ""));
      params.append("name", search);
      history.push(`/serach/${search.toString()}`);
    }
  };
  const clearSeach = () => {
    const params = new URLSearchParams();
    params.append("name", search);
    setSearch("");
  };

  return (
    <form onSubmit={searchShow}>
      <div className="mt-1 h-10 w-64  flex flex-row bg-white text-gray-600 justify-between items-center	px-2	">
        <input
          type="text"
          id="header-search"
          placeholder="Search here"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className=" px-2 text-base focus:borderColor 	"
        ></input>
        <div className="text-xl	flex flex-row justify-between items-center">
          {search.length > 1 && (
            <span className="cursor-pointer pr-1" onClick={clearSeach}>
              X
            </span>
          )}
          <img
            src={searchIcon}
            alt="search"
            className="cursor-pointer pl-1"
            onClick={searchShow}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
