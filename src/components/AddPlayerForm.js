import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: ""
  };

  handleValueChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.handleAddPlayer(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
            placeholder="Enter Your name"
          />

          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

export default AddPlayerForm;
