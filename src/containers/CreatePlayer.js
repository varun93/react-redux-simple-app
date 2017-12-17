import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPlayer} from '../actions/player';

class CreatePlayerContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: ''
    };
  }

  handleChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.props.createPlayer(name);
    const location = {pathname : '/players', state : { fromDashboard : true }};
    this.props.history.push(location);
  };

  render() {
   
    const { name } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
          <button type="submit">Create Player</button>
        </form>
      </div>
    );
  }
}  

const mapDispatchToProps = (dispatch) => ({
    createPlayer : (name) => dispatch(createPlayer(name))    
});

export default connect(null, mapDispatchToProps)(CreatePlayerContainer);
