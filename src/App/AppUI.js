import { useContext } from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoCreateButton } from '../components/TodoCreateButton/TodoCreateButton'
import { TodosLoading } from '../components/TodosLoading/TodosLoading'
import { TodosError } from '../components/TodosError/TodosError'
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos'
import { TodoModal } from '../components/TodoModal/TodoModal'
import { TodoCreateForm } from '../components/TodoCreateForm/TodoCreateForm'
import { useMainController } from '../useMainController/useMainController';

function AppUI() {
  const {
    completedTodos,
    error,
    loading,
    openTodoModal,
    searchedTodos,
    searchValue,
    totalTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenTodoModal,
    setSearchValue,
  } = useMainController()

  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

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

      <TodoCreateButton onClick={() => (setOpenTodoModal(state => !state))} />

      {openTodoModal && (
        <TodoModal>
          <TodoCreateForm addTodo={addTodo} setOpenTodoModal={setOpenTodoModal}/>
        </TodoModal>
      )}

    </>
  );
}

export default AppUI;
