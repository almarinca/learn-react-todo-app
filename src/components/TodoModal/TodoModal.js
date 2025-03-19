import './TodoModal.css'
import React from 'react';
import ReactDom from 'react-dom'

function TodoModal({children}) {
    return ReactDom.createPortal(
        <div className='todo-modal'>
            {children}
        </div>,
        document.getElementById('todo-modal')
    )
}

export {TodoModal}