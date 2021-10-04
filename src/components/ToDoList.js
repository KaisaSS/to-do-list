import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [toDos, setToDos] = useState("");

  const addToDo = (toDo) => {
    if (!toDo.text || /^\s*$/.test(toDo.text)) {
      return;
    }

    const newToDos = [toDo, ...toDos];

    setToDos(newToDos);
  };

  return (
    <div>
      <h1>What is the plan for today?</h1>
      <ToDoForm onSubmit={addToDo} />
    </div>
  );
}

export default ToDoList;
