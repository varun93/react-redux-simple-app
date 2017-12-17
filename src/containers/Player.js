import React, { Component } from 'react';
import {Player} from '../Components/Player';
import { Api } from '../Api';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getPlayerById } from "../Utils";


class PlayerContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { player } = this.props;
    return <Player player={player} />;
  }
}

PlayerContainer.propTypes = {
    match : PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  player: getPlayerById(ownProps.match.params.playerId, state)
});

export default connect(mapStateToProps,null)(PlayerContainer);