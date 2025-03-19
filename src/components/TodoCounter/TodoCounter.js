import './TodoCounter.css'
import { useContext } from 'react'
import { TodoContext } from '../../TodoContext'

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = useContext(TodoContext)
    const completedMsg = "Congratulations! You have completed all your tasks"
    return (
        <h1 className='todo-heading'>
            {(completedTodos === totalTodos) ? completedMsg : `You have completed ${completedTodos} of ${totalTodos} tasks`}
        </h1>
    )
}

export {TodoCounter}