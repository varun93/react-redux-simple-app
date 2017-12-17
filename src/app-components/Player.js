import React from "react";
import PropTypes from "prop-types";

// Edit Option should be there for an admin

export const Player = ({ player}) => {
  const playerName = player ? player.name : "";

  return (
    <div>
      <h1>{playerName}</h1>
    </div>
  );
};

Player.defaultProps = {
  player : {}
}

Player.propTypes = {
  player : PropTypes.object 
};