import React from "react";
import { TodoListProvider } from "../contexts/todoListContext";
import TodoItem from "../components/todoItem";

const todoList = () => {
  return (
    <TodoListProvider>
      <div className="ui stackable equal width grid">
        <div className="ui input column">
          <input type="text" placeholder="할일을적으시오" />
          <div className="ui small basic icon buttons">
            <button className="ui button">
              <i class="plus icon"></i>
            </button>
          </div>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </TodoListProvider>
  );
};

export default todoList;
