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
    console.log('Effect 2')
  }, []);

  // Every render when tasks have changed
  useEffect(() => {
    localStorage.setItem("storedTasks", JSON.stringify(tasks));
  }, [tasks]);
  
  const onSubmit = label => {
    setTasks([
      ...tasks,
      {
        label,
        completed: false,
      },
    ]);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>My ToDo</h1>
        <Count tasks={tasks} />
        <TaskInput onSubmit={onSubmit}/>
        <TaskList tasks={tasks}/>
      </div>
    </div>
  )


}
export default App;
