import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      
      <CreateTodoButton />
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
