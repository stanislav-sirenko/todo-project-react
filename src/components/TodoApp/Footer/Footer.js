import React from "react";

import Filters from "../TaskFilter";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <Filters />
    </footer>
  );
};

export default Footer;
