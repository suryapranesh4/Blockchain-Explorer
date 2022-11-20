import React from "react";
import coinFlipLoader from "../images/coin-flip.gif";

export default function Loader() {
  return (
    <div className="loader">
      <img src={coinFlipLoader} alt="Loader_Gif" />
    </div>
  );
}
