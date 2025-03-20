import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoCreateButton } from '../components/TodoCreateButton/TodoCreateButton'


function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.description}
            description={todo.description}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.description)}
            onDelete={() => deleteTodo(todo.description)}
            />
        ))}
      </TodoList>

      <TodoCreateButton />
    </>
  );
}

export default AppUI;
