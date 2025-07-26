
'use client'

import React, { useEffect, useState } from 'react'

const Page = () => {
  const [items, setItems] = useState<{ quantity: number; price: number }[]>([])
  const [itemQuantity, setItemQuantity] = useState<any>()
  const [itemPrice, setItemPrice] = useState<any>()
  const [itemAmount, setItemAmount] = useState<number>()


  useEffect(() => {
    // Calculate the total amount for all items
    const totalAmount = items.reduce((acc, item) => acc + item.quantity * item.price, 0)
    setItemAmount(totalAmount)
  }, [items])

  function addItem() {
    // Add a new item to the items array
    setItems(prevItems => [...prevItems, { quantity: itemQuantity, price: itemPrice }])
    setItemQuantity(0)
    setItemPrice(0)
  }

  function removeItem(index: number) {
    // Remove an item from the items array
    setItems(prevItems => prevItems.filter((item, i) => i !== index))
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <input type="number"
            value={item.quantity}
            onChange={e => setItems(prevItems => {
              const newItems = [...prevItems]
              newItems[index].quantity = Number(e.target.value)
              return newItems
            })} />
          <input type="number" value={item.price}
            onChange={e => setItems(prevItems => {
              const newItems = [...prevItems]
              newItems[index].price = Number(e.target.value)
              return newItems
            })} />
          <button onClick={() => removeItem(index)}>Remove item</button>
        </div>
      ))}
      <div>
        <input type="number" value={itemQuantity} onChange={e => setItemQuantity(Number(e.target.value))} />
        <input type="number" value={itemPrice} onChange={e => setItemPrice(Number(e.target.value))} />
        <button onClick={addItem}>Add item</button>
      </div>
      <div>
        Total amount: {itemAmount}
      </div>
    </div>
  )
}

export default Page