import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />

    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>✅</span>
      <span>Finish To-do's app</span>
      <span>❌</span>
    </li>
  )
}

export default App;
