import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([
    { label: "Learn HTML" },
    { label: "Learn CSS" },
    { label: "Learn JS" },
  ]);

  const taskElements = tasks.map((task) => {
    return (
      <li key={task.label}>
        <span className="label">{task.label}</span>
        <span className="trashcan">🗑️</span>
      </li>
    );
  });

  const onClickOk = () => {
    setTasks([
      ...tasks,
      {
        label: text,
      },
    ]);
  };

  return (
    <div className="App">
      <div class="container">
        <h1>My ToDo</h1>
        <p class="counter">0 completed</p>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={onClickOk}>OK</button>
        <small class="error"></small>
        <ul>{taskElements}</ul>
      </div>
    </div>
  );
}

export default App;
