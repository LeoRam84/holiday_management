import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const StockContext = createContext({})

StockContextProvider.propTypes = {
  children: PropTypes.node
}

// Item
// { name, description, participants, date, location, createdAt, updatedAt } 
export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('holiday-plans')
    if (!storedItems) return []
    const items = JSON.parse(storedItems)
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt)
      item.updatedAt = new Date(item.updatedAt)
    })
    return items
  })

  // currentState
  const addItem = (item) => {
    setItems(current => {
      const updatedItems = [item, ...current]
      localStorage.setItem('holiday-plans', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const getItem = (itemId) => {
    return items.find(item => item.id === +itemId)
  }

    //currentState
  const updateItem = (itemId, newAttributes) => {
    setItems(current => {
      const itemIndex = current.findIndex(item => item.id === +itemId)
      const updatedItems = [...current]
      Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date() })
      localStorage.setItem('holiday-plans', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  //currentState
  const deleteItem = (itemId) => {
    setItems(current => {
      const updatedItems = current.filter(item => item.id !== itemId)
      localStorage.setItem('holiday-plans', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const stock = {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem
  }

  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}