import './ChangeAlert.css'
import { withStorageListener } from './withStorageListener'

export function ChangeAlert({ shouldRender, onDismiss }) {
    if (shouldRender) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Tasks were modified from another tab or window, you must sync to continue.</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={onDismiss}
                    >Sync</button>
                </div>
            </div>
        )
    }
}

const ChangeAlertWithStorageListener =  withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }