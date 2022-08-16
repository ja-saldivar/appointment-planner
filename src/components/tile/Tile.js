import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {tile.map((value, index) => {
        <p className={index === 0 ? 'tile-title' : 'tile'} >
          {value}
        </p>
      })}
    </div>
  );
};
  