import { useState } from "react"

export function withStorageListener(ComponentToWrap) {
    return function WrappedComponent({ onUnsyncedStorage }) {
        const [storageChanged, setStorageChanged] = useState(false)

        window.addEventListener('storage', (change) => {
            if (change.key === 'todos_v1') {
                console.log('hubo cambios')
                setStorageChanged(true)
            }
        })
        
        const onSync = () => {
            setStorageChanged(false)
            onUnsyncedStorage()
        }
        return (
            <ComponentToWrap
                shouldRender = {storageChanged}
                onDismiss = {onSync}
            />
        )
    }
}