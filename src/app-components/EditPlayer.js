import React from "react";
import PropTypes from "prop-types";


export const Player = ({ player, updatePlayer }) => {
  const playerName = player ? player.name : "";

  return (
    <div>
      <h1>{playerName}</h1>
    </div>
  );
};

Player.defaultProps = {
  player: {}
};

Player.propTypes = {
  player: PropTypes.object
};
