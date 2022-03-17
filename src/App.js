import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>My ToDo</h1>
        <p className="counter"></p>
        <input type="text" />
        <button>OK</button>
        <ul>
          <li>
            <span className="label">Learn HTML</span>
            <span className="trashcan">🗑️</span>
          </li>
          <li>
            <span className="label">Learn CSS</span>
            <span className="trashcan">🗑️</span>
          </li>
          <li>
            <span className="label">Learn JS</span>
            <span className="trashcan">🗑️</span>
          </li>
        </ul>
      </div>
    </div>
  )


}
export default App;
