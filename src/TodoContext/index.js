import React, {useState} from 'react'
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoContextProvider({children}) {
    
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
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }}>
        {children}
    </TodoContext.Provider>
    );
}

<TodoContext></TodoContext>

export {TodoContext, TodoContextProvider};