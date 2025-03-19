import './TodoCreateForm.css';
import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';

function TodoCreateForm() {
    const {
        addTodo,
        setOpenTodoModal,
    } = useContext(TodoContext)

    const [newTodo, setNewTodo] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodo)
        setOpenTodoModal(false)
    }

    const onCancel = (event) => {
        setOpenTodoModal(false)
    }

    const onChange = (event) => {
        setNewTodo(event.target.value)
    }

    return (
        <form
            className="todo-form"
            onSubmit={onSubmit}
        >
            <label className='todo-form__label'>
                Write your new task
            </label>
            <textarea
                className='todo-form__text-area'
                placeholder="New Task..."
                value={newTodo}
                onChange={onChange}
            ></textarea>
            <div
                className="todo-form__buttons-container"
            >
                <button
                    type='button'
                    onClick={onCancel}
                    className="todo-form__button"
                >Cancel</button>
                <button
                    type='submit'
                    className="todo-form__button"
                >Add</button>
            </div>
        </form>
    )
}

export {TodoCreateForm}