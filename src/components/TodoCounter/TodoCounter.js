import './TodoCounter.css'

function TodoCounter({total, completed}) {
    const completedMsg = "Congratulations! You have completed all your tasks"
    return (
        <h1 className='todo-heading'>
            {(completed === total) ? completedMsg : `You have completed ${completed} of ${total} tasks`}
        </h1>
    )
}

export {TodoCounter}