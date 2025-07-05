import React from "react";
import mapimg from "../../assets/map.png";

function PresenseCon() {
  return (
    <>
      <div className="presensemai py-8">
        <div className="container">
          <h2>Presence</h2>
          <div className="imgpre">
            <img src={mapimg} alt="Map" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PresenseCon;
