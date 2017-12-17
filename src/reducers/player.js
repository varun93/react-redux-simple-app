import * as actionTypes from '../constants/actionTypes';

const playerReducer = (players=[],action={}) => {
    
    const {type,player} = action;

    switch (type) {

        case actionTypes.FETCH_PLAYERS_SUCCESS:
            return action.players;

        case actionTypes.ADD_NEW_PLAYER_SUCCESS:
            return [...players,player];
            
        case actionTypes.REMOVE_PLAYER_SUCCESS:
            return players.filter((p) => p.id != player.id); 

        case actionTypes.UPDATE_PLAYER_SUCCESS:
            return players.map((p) => {
                 return (p.id == player.id  ?  {id : player.id, name : player.name} : p);
            });

        default:
            return players;
    }

};

export default playerReducer;