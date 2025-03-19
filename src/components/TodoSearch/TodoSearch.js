import './TodoSearch.css'
import { useContext } from 'react'
import { TodoContext } from '../../TodoContext'

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = useContext(TodoContext)

    return (
        <input
            placeholder="Search Task"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    )
}

export {TodoSearch}