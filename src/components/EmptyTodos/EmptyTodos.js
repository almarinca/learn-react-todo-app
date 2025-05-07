import './EmptyTodos.css'

function EmptyTodos({ mode='all', searchText }) {

    const onEmptyMessages = {
        'all': {
            symbol: 'i',
            message: 'You have not created any tasks, create one to get started.',
        },
        'search': {
            symbol: 'x',
            message: `There are no results for "${searchText}".`,
        },
    }
    
    return (
        <div className='empty-todos-container'>
            <div className='empty-todos-icon'>
                {onEmptyMessages[mode].symbol}
            </div>
            <p className='empty-todos-message'>
                {onEmptyMessages[mode].message}
            </p>
        </div>
    )
}

export {EmptyTodos}