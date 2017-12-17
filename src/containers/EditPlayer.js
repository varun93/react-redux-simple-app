import React, { Component } from "react";
import { Api } from "../Api";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editPlayer } from "../actions/player";
import {getPlayerById} from '../Utils';

class EditPlayerContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        name : props.player.name   
    };
  }

  handleChange = (e) => {
      const name = e.target.value;
      this.setState({name});  
    }

  render() {
    const { player, editPlayer } = this.props;
    const { name } = this.state;
    return (<div>
        <form onSubmit={(e) => { 
                e.preventDefault(); 
                editPlayer(Object.assign({},player,{name})); 
            }}>
            <input value={name} onChange={this.handleChange} />
            <button type='submit'>
                Edit
            </button>
        </form>
     </div>);
  }
}

EditPlayerContainer.propTypes = {
  match: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  editPlayer: player => dispatch(editPlayer(player))
});

const mapStateToProps = (state, ownProps) => ({
  player: getPlayerById(ownProps.match.params.playerId,state)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayerContainer);