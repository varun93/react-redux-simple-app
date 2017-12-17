import React,{Component} from 'react';
import { PlayersArchive } from '../Components/PlayersArchive';
import { Api } from '../Api';
import { connect } from "react-redux";
import { removePlayer, fetchPlayers } from "../actions/player";

class PlayersArchiveContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
      this.props.fetchPlayers();
  }

  render() {
    const { players,removePlayer } = this.props;
    return <PlayersArchive removePlayer={removePlayer} players={players} />;
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchPlayers : () => dispatch(fetchPlayers()),
  removePlayer : (player) => dispatch(removePlayer(player))
});

const mapStateToProps = (state) => {
  return {
     players: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersArchiveContainer);