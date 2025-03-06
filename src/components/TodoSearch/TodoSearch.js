import './TodoSearch.css'

function TodoSearch({
    searchValue,
    setSearchValue
}) {
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