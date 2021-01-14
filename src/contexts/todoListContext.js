import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodo = [
  {
    id: 1,
    text: "create project",
    done: false,
  },
  {
    id: 2,
    text: "styling components",
    done: false,
  },
  {
    id: 3,
    text: "create ContextAPI",
    done: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "INSERT":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialTodo);
  const nextId = useRef(4);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
