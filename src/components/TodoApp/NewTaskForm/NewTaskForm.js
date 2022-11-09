import React from "react";

import TaskList from "../TaskList";
import Footer from "../Footer";

import "./NewTaskForm.css";

const NewTaskForm = ({ todos }) => {
  return (
    <section className="main">
      <TaskList todos={todos} />
      <Footer />
    </section>
  );
};

export default NewTaskForm;
