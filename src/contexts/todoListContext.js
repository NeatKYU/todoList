import React, { createContext, useState } from "react";

const TodoListContext = createContext({
  state: {
    id: 1,
    text: "",
    done: false,
  },
  actions: {
    setId: () => {},
    setText: () => {},
    setDone: () => {},
  },
});

const TodoListProvider = ({ children }) => {
  const [id, setId] = useState(1);
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  const value = {
    state: {
      id,
      text,
      done,
    },
    actions: {
      setId,
      setText,
      setDone,
    },
  };
  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};

const TodoListConsumer = TodoListContext.Consumer;

export { TodoListProvider, TodoListConsumer };

export default TodoListContext;
