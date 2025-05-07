import './TodoList.css'

function TodoList({
    totalTodos,
    searchedTodos,
    searchText,
    loading,
    error,
    onLoading,
    onError,
    onEmpty,
    onEmptySearch,
    renderItem,
    children,
}) {    
    const renderFunc = children || renderItem
    return (
        <>
            {loading && onLoading()}
            {error && onError()}
            {!loading && !!totalTodos && searchedTodos.length === 0 && onEmptySearch(searchText)}
            {!loading && !totalTodos && onEmpty()}
            {!loading && !error && 
                <ul className='todo-list'>
                    {searchedTodos.map(todo => renderFunc(todo))}
                </ul>
            }
        </>
    )
}

export {TodoList}