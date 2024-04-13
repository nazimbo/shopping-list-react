import "./App.css";

function App() {
  return (
    <main className="App">
      <div className="header">
        <h1>Shopping List</h1>
        <h3 className="completed">You are done!</h3>
        <input type="text" placeholder="Add an item" />
      </div>
      <ul className="list">
        <li>
          <input type="checkbox" />
          <span>Apples</span>
          <button className="delete">Delete</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>Bananas</span>
          <button className="delete">Delete</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>Carrots</span>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </main>
  );
}

export default App;
