import './ChangeAlert.css'
import { useStorageListener } from '../../hooks/useStorageListener'

export function ChangeAlert(onUnsyncedStorage) {
    const { storageChanged, onSync } = useStorageListener(onUnsyncedStorage)

    if (storageChanged) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Tasks were modified from another tab or window, you must sync to continue.</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={onSync}
                    >Sync</button>
                </div>
            </div>
        )
    }
}