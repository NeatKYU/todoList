import React, { useCallback, useState } from "react";
import {
  useTodoDispatch,
  useTodoState,
  useNextId,
} from "../contexts/TodoListContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  const nextId = useNextId();
  const [value, setValue] = useState("");

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: "INSERT",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    nextId.current += 1;
  });

  return (
    <div className="ui stackable equal width grid">
      <div className="ui input column">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="할일을적으시오"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="ui small basic icon buttons">
            <button className="ui button">
              <i className="plus icon"></i>
            </button>
          </div>
        </form>
        {state &&
          state.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
