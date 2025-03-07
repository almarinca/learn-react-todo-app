import './TodoItem.css'

function TodoItem({description, completed, onComplete}) {
    return (
        <li className="todo-item">
            <span
                className='button'
                onClick={() => onComplete(description)}
            >
                {`${completed? "🔲" : "✅"}`}
            </span>
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