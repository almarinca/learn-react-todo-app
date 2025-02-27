import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton'
import './App.css';

const defaultTodos = [
  {description: "Comprar pan y leche", completed: true},
  {description: "Llamar al dentista para una cita", completed: false},
  {description: "Limpiar el escritorio", completed: false},
  {description: "Hacer ejercicio durante 30 minutos", completed: true},
  {description: "Escribir un correo a un amigo", completed: false},
  {description: "Pagar las facturas pendientes", completed: true},
  {description: "Leer 20 páginas de un libro", completed: false},
  {description: "Sacar la basura", completed: true},
  {description: "Regar las plantas", completed: true},
  {description: "Ordenar el armario", completed: false},
  {description: "Aprender 5 palabras nuevas en otro idioma", completed: false},
  {description: "Cocinar una receta nueva", completed: false},
  {description: "Organizar los archivos en la computadora", completed: true},
  {description: "Hacer una lista de compras", completed: false},
  {description: "Responder mensajes atrasados", completed: false},
  {description: "Planear la agenda de la semana", completed: false},
  {description: "Meditar por 10 minutos", completed: false},
  {description: "Limpiar el coche", completed: false},
  {description: "Escuchar un podcast interesante", completed: true},
  {description: "Escribir en un diario", completed: false},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={1} total={19} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            description={todo.description}
            completed={todo.completed}
            />
        ))}
      </TodoList>

      <TodoCreateButton />
    </React.Fragment>
  );
}

export default App;
