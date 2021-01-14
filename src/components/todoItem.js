import React, { useCallback } from "react";
import { useTodoDispatch } from "../contexts/TodoListContext";

const TodoItem = ({ id, text, done }) => {
  const dispatch = useTodoDispatch();
  const onToggle = useCallback(() => dispatch({ type: "TOGGLE", id }), [id]);
  const onRemove = useCallback(() => dispatch({ type: "REMOVE", id }), [id]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <p
          style={{ textDecoration: done ? "line-through" : "" }}
          onClick={onToggle}
        >
          {text}
        </p>
        <div className="ui small basic icon buttons">
          <button className="ui button" onClick={onRemove}>
            <i className="minus icon"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
