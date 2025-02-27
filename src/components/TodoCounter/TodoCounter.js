import './TodoCounter.css'

function TodoCounter({total, completed}) {
    return (
        <h1 className='todo-heading'>You have completed {completed} of {total} tasks</h1>
    )
}

export {TodoCounter}