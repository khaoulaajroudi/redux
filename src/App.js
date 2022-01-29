import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AddTask, DeleteTask, DoneTask } from "./JS/Action/ActionType";

function App() {
  const [text, settext] = useState();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todolist);
  return (
    <div className="App">
      <div className="nav">
        <h1>Work shop REDUX</h1>
      </div>
      <div className="inp">
        <input
          placeholder="your task"
          onChange={(e) => settext(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(AddTask({ id: Math.random(), text: text, isDone: false }))
          }
        >
          add
        </button>
      </div>
      {tasks.map((el) => (
        <div>
          <h1
            onClick={() => dispatch(DoneTask(el.id))}
            className={el.isDone ? "green" : "red"}
          >     
            {el.text}
          </h1>
          <p>{el.isDone ? "Done" : "NotDone"}</p>
          <button onClick={() => dispatch(DeleteTask(el.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
