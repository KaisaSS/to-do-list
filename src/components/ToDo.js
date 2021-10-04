import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";

function ToDo({ toDos, completeToDo, removeToDo, updateToDo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateToDo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return toDos.map((toDo, index) => (
    <div className={toDo.isComplete ? "to-do-row complete" : "to-do-row"} key={index}>
      <div key={toDo.id} onClick={() => completeToDo(toDo.id)}>
        {toDo.text}
      </div>
      <div className="icons">
        <AiOutlineCloseCircle onClick={() => removeToDo(toDo.id)} className="delete-icon" />
        <AiOutlineEdit onClick={() => setEdit({ id: toDo.id, value: toDo.text })} className="edit-icon" />
      </div>
    </div>
  ));
}

export default ToDo;
