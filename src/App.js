import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([
    { completed: false, label: "Learn HTML" },
    { completed: false, label: "Learn CSS" },
    { completed: false, label: "Learn JS" },
  ]);



  const taskElements = tasks.map((task, index) => {
    const onClickTasks = () => {
      const updatedTasks =[];
      tasks.forEach(taskToUpdate => {
        if (taskToUpdate === task) {
          updatedTasks.push({
            completed: !task.completed,
            label: task.label,
          })
        }
        else {
          updatedTasks.push(taskToUpdate);
        }
      })
      setTasks(updatedTasks);
    }
    return (
      <li key={task.label} className={task.completed ? "completed" : null }>
        <span className="label" onClick={onClickTasks}>{task.label}</span>
        <span className="trashcan">🗑️</span>
      </li>
    );
  });

  const onClickOk = () => {
    setText("");
    setTasks([
      ...tasks,
      {
        label: text,
      },
    ]);
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <div class="container">
        <h1>My ToDo</h1>
        <p class="counter">0 completed</p>
        <input
          type="text"
          value={text}
          onChange={ onTextChange }
        />
        <button onClick={onClickOk}>OK</button>
        <small class="error"></small>
        <ul>{taskElements}</ul>
      </div>
    </div>
  );
}

export default App;
