import React from "react"

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName)
        let parsedItem = initialValue
  
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
        } else {
          parsedItem = JSON.parse(localStorage.getItem(itemName))
          setItem(parsedItem)
        }
  
        setLoading(false)
      } catch(error) {
        setError(true)
      }
    }, 3000)
  }, [])


  const saveItem = (item) => {
    localStorage.setItem(itemName, JSON.stringify(item))
    setItem(item)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export {useLocalStorage}

// localStorage.removeItem('todos_v1')

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