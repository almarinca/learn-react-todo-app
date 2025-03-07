import './TodoItem.css'

function TodoItem({description, completed, onComplete, onDelete}) {
    return (
        <li className="todo-item">
            <span
                className='button'
                onClick={onComplete}
            >
                {`${completed? "🔲" : "✅"}`}
            </span>
            <span
                className={
                    `todo-description
                    ${completed && "todo-description_completed"}`
                }
            >
                {description}
            </span>
            <span
                className='button'
                onClick={onDelete}
            >❌</span>
        </li>
    )
}

export {TodoItem}