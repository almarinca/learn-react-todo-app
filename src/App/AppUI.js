import { useContext } from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoCreateButton } from '../components/TodoCreateButton/TodoCreateButton'
import { TodosLoading } from '../components/TodosLoading/TodosLoading'
import { TodosError } from '../components/TodosError/TodosError'
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos'
import { TodoContext } from '../TodoContext';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {loading && <TodosLoading/>}
        {error && <TodosError/>}
        {!loading && searchedTodos.length < 1 && <EmptyTodos/>}
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
