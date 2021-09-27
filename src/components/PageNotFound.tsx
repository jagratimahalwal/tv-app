import React from "react";
import { Link, useHistory } from "react-router-dom";
import tvIcon from "../assets/tv.png";

const PageNotFound: React.FC<{}> = () => {
  const history = useHistory();
  return (
    <main className="mt-20  flex-1 flex flex-col items-center justify-center">
      <img
        src={tvIcon}
        className="h-48 my-4 cursor-pointer"
        onClick={() => history.push("/tv-app")}
        alt="tv-icon"
      />
      <span className="text-6xl">😨</span>
      <h1>Sorry, this page doesn't exist</h1>
      <h3 className="cursor-pointer">
        <Link to="/">Click here to go to the Home page</Link>
      </h3>
    </main>
  );
};

export default PageNotFound;
