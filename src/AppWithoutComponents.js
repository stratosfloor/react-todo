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
      // setTasks(
      //   tasks.map((taskToUpdate) => {
      //     if (taskToUpdate === task) {
      //       return {
      //         completed: !task.completed,
      //         label: task.label,
      //       };
      //     } else {
      //       return taskToUpdate;
      //     }
      //   })
      // );
      setTasks([
        ...tasks.slice(0, index), 
        {
          ...task,
          completed: !task.completed,
        },
        ...tasks.slice(index+1),
      ])
    };
    const onClickTrashcan = () => {
      setTasks(tasks.filter(taskToFilter => taskToFilter !== task));
    }
    return (
      <li key={task.label} className={task.completed ? "completed" : null}>
        <span className="label" onClick={onClickTasks}>
          {task.label}
        </span>
        <span className="trashcan" onClick={onClickTrashcan}>🗑️</span>
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
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="App">
      <div class="container">
        <h1>My ToDo</h1>
        <p class="counter">{completedCount} completed</p>
        <input type="text" value={text} onChange={onTextChange} />
        <button onClick={onClickOk}>OK</button>
        <small class="error"></small>
        <ul>{taskElements}</ul>
      </div>
    </div>
  );
}

export default App;
