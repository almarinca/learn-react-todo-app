import { useState } from "react"

export function useStorageListener({onUnsyncedStorage}) {
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

    return ({
        storageChanged,
        onSync,
    })
}