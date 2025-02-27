import './TodoItem.css'

function TodoItem({description, completed}) {
    let completedBox = <span>🔲</span>
    if (completed) {
        completedBox = <span>✅</span>
    }
    return (
        <li className="todo-item">
            {completedBox}
            <span>{description}</span>
            <span>❌</span>
        </li>
    )
}

export {TodoItem}