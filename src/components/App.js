import React from "react";
import TodoList from "./TodoList";
import { TodoProvider } from "../contexts/TodoListContext";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <TodoList></TodoList>
      </div>
    </TodoProvider>
  );
};

export default App;
