import React from 'react';
import {Link} from 'react-router-dom';

export const PlayersArchive = ({ players, removePlayer }) => {
  return (
    <div>
      <button>
        <Link to='/players/create'>
          Add New Player
        </Link>
      </button>
      <ul>
        {players.map(player => {
          const {id,name} = player;
          const slug = "/players/" + id;
          const editSlug = "/players/" + id + "/edit";
          return <li key={id}>
              <Link to={slug}>{name}</Link>
              <span onClick={()=>removePlayer(player)}>  X  </span>
              <Link to={editSlug}>
                <span> Edit </span>
              </Link>
            </li>;
        })}
      </ul>
    </div>
  );
};
