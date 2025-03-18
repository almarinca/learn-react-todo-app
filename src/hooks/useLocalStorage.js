import React from "react"

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName)
        let parsedItem = initialValue
  
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
        } else {
          parsedItem = JSON.parse(localStorage.getItem(itemName))
          setItem(parsedItem)
        }
  
        setLoading(false)
      } catch(error) {
        setError(true)
      }
    }, 3000)
  }, [])


  const saveItem = (item) => {
    localStorage.setItem(itemName, JSON.stringify(item))
    setItem(item)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export {useLocalStorage}