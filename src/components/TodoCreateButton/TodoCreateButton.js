import './TodoCreateButton.css'
import { useContext } from 'react'
import { TodoContext } from '../../TodoContext'

function TodoCreateButton() {
    const {
        setOpenTodoModal
    } = useContext(TodoContext)

    return (
        <button onClick={() => (setOpenTodoModal(state => !state))}>
            +
        </button>
    )
}

export {TodoCreateButton}