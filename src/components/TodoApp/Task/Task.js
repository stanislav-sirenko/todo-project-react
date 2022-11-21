import React, { Component } from "react";

import { formatDistanceToNow } from "date-fns";
// import { ru } from "date-fns/locale";

import "./Task.css";

export default class Task extends Component {
  state = {
    label: "",
  };

  onLabelEditTask = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.props.addEditingItem(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    const { id, label, checked, onDeleted, onEditingItem, editing, onToggleDone, createDate } = this.props;

    const createTime = formatDistanceToNow(createDate, { includeSeconds: true });
    const classEdit = editing ? "editing" : checked ? "completed" : "";
    const editInput = (
      <form onSubmit={this.onSubmitTask}>
        <input type="text" className="edit" onChange={this.onLabelEditTask} defaultValue={label} autoFocus />
      </form>
    );

    return (
      <li key={id} className={classEdit}>
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
            <span className="created">created {createTime} ago</span>
          </label>
          <button className="icon icon-edit" onClick={onEditingItem}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {editing && editInput}
      </li>
    );
  }
}
