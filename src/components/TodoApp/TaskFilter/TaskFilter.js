import React, { Component } from "react";

import "./TaskFilter.css";

export default class Filters extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    );
  }
}

// const Filters = () => {
//   return (
//     <ul className="filters">
//       <li>
//         <button className="selected">All</button>
//       </li>
//       <li>
//         <button>Active</button>
//       </li>
//       <li>
//         <button>Completed</button>
//       </li>
//     </ul>
//   );
// };

// export default Filters;
