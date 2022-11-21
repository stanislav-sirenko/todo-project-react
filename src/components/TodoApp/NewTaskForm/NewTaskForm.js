import React, { Component } from "react";

import "./NewTaskForm.css";

export default class NewTaskForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value) {
      this.setState({
        label: e.target.value,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" className="new-todo" onChange={this.onLabelChange} placeholder="What needs to be done?" value={this.state.label} autoFocus></input>
        </form>
      </header>
    );
  }
}
