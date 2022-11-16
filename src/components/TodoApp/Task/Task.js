import React, { Component } from "react";

export default class Task extends Component {
  render() {
    const { id, label, checked, onDeleted, onToggleDone } = this.props;

    const classLabel = checked ? "completed" : "";

    return (
      <li key={id} className={classLabel}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={checked}
            onChange={() => {
              onToggleDone();
            }}
          ></input>
          <label>
            <span className="description">{label}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
