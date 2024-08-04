import { Fragment } from "react";
import "./app.css";

//Components
import { InputTodo } from "./components/input-todo";
import { ListTodos } from "./components/list-todo";

export function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}
