import './TodoCreateForm.css';

function TodoCreateForm() {
    return (
        <form className="todo-form">
            <label className='todo-form__label'>
                Write your new task
            </label>
            <textarea
                className='todo-form__text-area'
                placeholder="New Task..."
            ></textarea>
            <div
                className="todo-form__buttons-container"
            >
                <button
                    className="todo-form__button"
                >Cancel</button>
                <button
                    className="todo-form__button"
                >Add</button>
            </div>
        </form>
    )
}

export {TodoCreateForm}