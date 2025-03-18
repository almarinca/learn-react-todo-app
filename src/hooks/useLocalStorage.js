import React from "react"

function useLocalStorage(itemName, initialValue) {

  const localStorageItems = localStorage.getItem(itemName)
  let parsedItem = initialValue

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
  } else {
    parsedItem = JSON.parse(localStorage.getItem(itemName))
  }

  const [item, setItem] = React.useState(parsedItem)

  const saveItem = (item) => {
    localStorage.setItem(itemName, JSON.stringify(item))
    setItem(item)
  }

  return [item, saveItem]
}

export {useLocalStorage}