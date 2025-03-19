import './EmptyTodos.css'

function EmptyTodos() {
    
    return (
        <div className='empty-todos-container'>
            <div className='empty-todos-icon'>i</div>
            <p className='empty-todos-message'>
                You have not created any tasks, create one to get started.
            </p>
        </div>
    )
}

export {EmptyTodos}