import './TodosError.css'

function TodosError() {
    return (
        <div className='error-container'>
            <div className='error-icon'>!</div>
            <p className='error-message'>
                An error ocurred, please try again.
            </p>
        </div>
    )
}

export {TodosError}