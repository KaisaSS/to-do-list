import React, { useState, useEffect, useRef } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="to-do-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="to-do-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="to-do-button edit">Update Item</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add new item"
            value={input}
            name="text"
            className="to-do-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="to-do-button">Add New Item</button>
        </>
      )}
    </form>
  );
}

export default ToDoForm;
