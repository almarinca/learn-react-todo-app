import './TodoCreateButton.css'

function TodoCreateButton({ onClick }) {
    return (
        <button
            className='todo-create-button'
            onClick={onClick}
        >
            +
        </button>
    )
}

export {TodoCreateButton}