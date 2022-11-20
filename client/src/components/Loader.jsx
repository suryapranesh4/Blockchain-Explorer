import React from "react";
import explorerIcon from "../images/explorer.ico";

export default function Loader() {
  return (
    <div className="loader">
      <img src={explorerIcon} alt="Loader" />
    </div>
  );
}
