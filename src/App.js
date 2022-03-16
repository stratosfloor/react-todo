import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>My ToDo</h1>
        <p class="counter">0 completed</p>
        <input type="text" />
        <button>OK</button>
        <small class="error"></small>
        <ul>
          <li>
            <span className="label">Learn HTML</span>
            <span className="trashcan">&#x1F5D1;</span>
          </li>
          <li>
            <span className="label">Learn CSS</span>
            <span className="trashcan">&#x1F5D1;</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
