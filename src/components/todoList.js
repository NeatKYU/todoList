import React from "react";
import { useTodoDispatch, useTodoState } from "../contexts/TodoListContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const state = useTodoState();
  //const dispatch = useTodoDispatch();

  return (
    <div className="ui stackable equal width grid">
      <div className="ui input column">
        <input type="text" placeholder="할일을적으시오" />
        <div className="ui small basic icon buttons">
          <button className="ui button">
            <i className="plus icon"></i>
          </button>
        </div>
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
