import "./App.css";

function App() {
  const tasks = [
    { label: "Learn HTML" },
    { label: "Learn CSS" },
    { label: "Learn JS" },
  ];

  const taskElements = tasks.map((task) => {
    return (
      <li key={task.label}>
        <span className="label">{task.label}</span>
      </li>
    );
  });

  return (
    <div className="App">
      <div class="container">
        <h1>My ToDo</h1>
        <p class="counter">0 completed</p>
        <input type="text" />
        <button>OK</button>
        <small class="error"></small>
        <ul>{taskElements}</ul>
      </div>
    </div>
  );
}

export default App;
