import "./App.css";
import Count from "./Count";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { completed: true, label: "Learn HTML" },
    { completed: false, label: "Learn CSS" },
    { completed: false, label: "Learn JS" },
  ]);

  // Every render
  // useEffect(() => {
  //   console.log('Effect 1');
  // });

  // First render only
  useEffect(() => {
    const loadedJson = localStorage.getItem("storedTasks");
    if (loadedJson) {
      setTasks(JSON.parse(loadedJson));
    } else {
      setTasks([]);
    }
  }, []);

  // Every render when tasks have changed
  useEffect(() => {
    localStorage.setItem("storedTasks", JSON.stringify(tasks));
  }, [tasks]);

  const onSubmit = (label) => {
    setTasks([
      ...tasks,
      {
        label,
        completed: false,
      },
    ]);
  };
  const onClickTask = (task) => {
    setTasks(
      tasks.map((taskToUpdate) => {
        if (taskToUpdate === task) {
          return {
            completed: !task.completed,
            label: task.label,
          };
        } else {
          return taskToUpdate;
        }
      })
    );
  };

  const onClickTrashcan = (taskToFilter) => {
    setTasks(tasks.filter((toRemove) => toRemove !== taskToFilter));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My ToDo</h1>
        <Count tasks={tasks} />
        <TaskInput onSubmit={onSubmit} />
        <TaskList
          tasks={tasks}
          onClickTask={onClickTask}
          onClickTrashcan={onClickTrashcan}
        />
      </div>
    </div>
  );
}
export default App;
