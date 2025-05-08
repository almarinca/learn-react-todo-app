import React, { act, useReducer } from "react"

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = useReducer(reducer, initialState(initialValue))
  const { 
    onSuccess,
    onError,
    onSave,
    onSynchronize,
   } = createBoundActions(dispatch);

  const {
    item,
    loading,
    error,
    isSynced,
  } = state
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName)
        let parsedItem = initialValue
  
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
        } else {
          parsedItem = JSON.parse(localStorage.getItem(itemName))
        }

        onSuccess(parsedItem)
      } catch(error) {
        onError()
      }
    }, 3000)
  }, [isSynced])


  const saveItem = (item) => {
    localStorage.setItem(itemName, JSON.stringify(item))
    onSave(item)
  }

  const syncItem = () => {
    onSynchronize()
  }

  return {
    item,
    loading,
    error,
    saveItem,
    syncItem,
  }
}

const initialState = (initialValue) => ({
  item: [],
  loading: true,
  error: false,
  isSynced: true,
})

// Bound action creators
const createBoundActions = dispatch => ({
  onSuccess: (item) => dispatch({ type: actionTypes.success, payload: item }),
  onError: () => dispatch({ type: actionTypes.error }),
  onSave: (item) => dispatch({ type: actionTypes.save, payload: item }),
  onSynchronize: () => dispatch({ type: actionTypes.synchronize }),
})

const actionTypes = {
  success: 'SUCCESS',
  error: 'ERROR',
  save: 'SAVE',
  synchronize: 'SYNCHRONYZE'
}

const reducerObject = (state, payload) => ({
    [actionTypes.success]: {
      ...state,
      item: payload,
      loading: false,
      error: false,
      isSynced: true,
    },
    [actionTypes.error]: {
      ...state,
      error: true
    },
    [actionTypes.save]: {
      ...state,
      item: payload,
    },
    [actionTypes.synchronize]:{
      ...state,
      loading: true,
      isSynced: false,
    },
})


const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type]
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