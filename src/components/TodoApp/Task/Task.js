import React, { Component } from "react";

export default class Task extends Component {
  onLabelClick = () => {
    console.log(`done ${this.props.label}`);
  };

  render() {
    const { todos } = this.props;
    return todos.map((item) => {
      // console.log(this.props.id);
      return (
        <li key={item.id}>
          <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
              <span className="description" onClick={this.onLabelClick}>
                {item.label}
              </span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>
      );
    });
  }
}

// const Task = ({ todos }) => {
//   return todos.map((item) => {
//     return (
//       <li key={item.id}>
//         <div className="view">
//           <input className="toggle" type="checkbox"></input>
//           <label>
//             <span className="description">{item.label}</span>
//             <span className="created">created 17 seconds ago</span>
//           </label>
//           <button className="icon icon-edit"></button>
//           <button className="icon icon-destroy"></button>
//         </div>
//       </li>
//     );
//   });
// };

// export default Task;
