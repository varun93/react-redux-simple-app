import * as actionTypes from "../constants/actionTypes";
import {Api} from '../Api'; 
import {v4} from 'uuid';

// fetch players success
export const fetchPlayersSuccess = (players=[]) => {
    return {type : actionTypes.FETCH_PLAYERS_SUCCESS,players};
};

// fetch players failure
export const fetchPlayersFailure = (error) => {
    return { type : actionTypes.FETCH_PLAYERS_FAILURE,error };
};

// create player success
export const createPlayerSuccess = (player) => {
     return { type: actionTypes.ADD_NEW_PLAYER_SUCCESS, player};
};

// edit player success
export const editPlayerSuccess = (player) => {
    return { type: actionTypes.UPDATE_PLAYER_SUCCESS, player };
};

// remove player success
export const removePlayerSuccess = (player) => {
    return { type: actionTypes.REMOVE_PLAYER_SUCCESS, player };
};


export const fetchPlayers = () => {
    return async (dispatch,getState) => {
        try {
            const players = await Api().fetchPlayers();    
            console.log(players);
            dispatch(fetchPlayersSuccess(players));    
        } catch (error) {
            //handle the error
            console.log(error);
        }
        
    };
};

export const removePlayer = (player) => {
    return async (dispatch,getState) => {
        try {
            await Api().removePlayer(player);    
            dispatch(removePlayerSuccess(player));    
        } catch (error) {
            //handle the error
            console.log(error);
        }
        
    };
};

export const editPlayer = (player) => {
    return async function(dispatch,getState){
        try {
            await Api().editPlayer(player);    
            dispatch(editPlayerSuccess(player));    
        } catch (error) {
            //handle the error
            console.log(error);
        }
        
    };
};

export const createPlayer = (name) => {
    return async (dispatch,getState) => {
        try {
            var player = await Api().createPlayer(name);    
            console.log(player);
            dispatch(createPlayerSuccess(player));    
        } catch (error) {
            //handle the error
            console.log(error);
        }
    };
};