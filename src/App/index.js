import React, {useState} from 'react'
import AppUI from './AppUI';
import { useLocalStorage } from '../hooks/useLocalStorage';

// const defaultTodos = [
//   {description: "Comprar pan y leche", completed: true},
//   {description: "Llamar al dentista para una cita", completed: false},
//   {description: "Limpiar el escritorio", completed: false},
//   {description: "Hacer ejercicio durante 30 minutos", completed: true},
//   {description: "Escribir un correo a un amigo", completed: false},
//   {description: "Pagar las facturas pendientes", completed: true},
//   {description: "Leer 20 páginas de un libro", completed: false},
//   {description: "Sacar la basura", completed: true},
//   {description: "Regar las plantas", completed: true},
//   {description: "Ordenar el armario", completed: false},
//   {description: "Aprender 5 palabras nuevas en otro idioma", completed: false},
//   {description: "Cocinar una receta nueva", completed: false},
//   {description: "Organizar los archivos en la computadora", completed: true},
//   {description: "Hacer una lista de compras", completed: false},
//   {description: "Responder mensajes atrasados", completed: false},
//   {description: "Planear la agenda de la semana", completed: false},
//   {description: "Meditar por 10 minutos", completed: false},
//   {description: "Limpiar el coche", completed: false},
//   {description: "Escuchar un podcast interesante", completed: true},
//   {description: "Escribir en un diario", completed: false},
// ]

// localStorage.setItem('todos_v1', JSON.stringify(defaultTodos))
// localStorage.removeItem('todos_v1')

function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('todos_v1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.description.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  )

  const completeTodo = (description) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.description === description
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (description) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.description === description
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
