import './TodoItem.css'

function TodoItem({description, completed}) {
    let completedBox = <span className='button'>🔲</span>
    if (completed) {
        completedBox = <span className='button'>✅</span>
    }
    return (
        <li className="todo-item">
            {completedBox}
            <span className={
                `todo-description
                ${completed && "todo-description_completed"}`
                }>
                {description}
            </span>
            <span className='button'>❌</span>
        </li>
    )
}

export {TodoItem}