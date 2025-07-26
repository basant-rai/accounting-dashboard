'use client'

import AddInvoiceModal from '@/components/@Modal/AddInvoiceItemModal'
import { Button } from '@/components/reusable/Button/button'
import { TrashIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

interface IItem {
  id: number
  item_name: string,
  description: string,
  quantity: any,
  price: any,
  amount: any
}

const AddItemTable = () => {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [itemName, setItemName] = useState<string>()
  const [itemDesc, setItemDesc] = useState<string>()
  const [itemQuantity, setItemQuantity] = useState<any>(0)
  const [itemPrice, setItemPrice] = useState<any>(0)
  const [itemAmount, setItemAmount] = useState<any>(0)

  const [items, setItems] = useState<IItem[]>([])


  useEffect(() => {

    // if (itemQuantity && itemPrice) {
    const totalAmount = items.reduce((acc, item) => acc + item.quantity * item.price, 0)

    console.log(totalAmount)
    setItemAmount(totalAmount)
    // }
  }, [items])

  console.log(itemAmount)


  function getItems() {
    setCount(count + 1)

    const newItem = {
      id: count,
      item_name: '',
      descripiton: '',
      quantity: 0,
      price: 0,
      amount: 0
    } as unknown as IItem

    setItems(prevItem => [...prevItem, newItem])
    setItemQuantity(0)
    setItemPrice(0)
  }

  // console.log(items)
  function deleteItem(id: number) {
    setItems(prevItem => prevItem.filter((item) => item.id !== id))
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3">Items</th>
              <th scope="col" className="px-4 py-3">Description</th>
              <th scope="col" className="px-4 py-3">Quantity</th>
              <th scope="col" className="px-4 py-3">Price</th>
              <th scope="col" className="px-4 py-3">Amount</th>
              <th scope="col" className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <>
              {
                items.length > 0 ?
                  <>
                    {
                      items.map((item, index) => (
                        <tr className="border-b" key={index}>
                          <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">
                            <input
                              type="text"
                              placeholder="Enter item name"
                              // value={item.item_name}
                              onChange={e => setItemName(e.target.value)}
                              className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
                          </th>
                          <td className="px-4 py-2">
                            <input
                              type="text"
                              placeholder="Enter description"
                              // value={item.description}
                              onChange={e => setItemDesc(e.target.value)}

                              className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                            <input
                              type="text"
                              placeholder="Enter quantity"
                              // defaultValue={item.quantity}
                              // onChange={e => setItemQuantity(e.target.value)}
                              onChange={e => setItems(prevItems => {
                                const newItems = [...prevItems]
                                newItems[index].quantity = Number(e.target.value)
                                console.log(newItems, 'check')
                                return newItems
                              })}

                              className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                            <input
                              type="text"
                              placeholder="Enter item price"
                              // defaultValue={item.price}
                              // onChange={e => setItemPrice(e.target.value)}
                              onChange={e => setItems(prevItems => {
                                const newItems = [...prevItems]
                                newItems[index].price = Number(e.target.value)
                                return newItems
                              })}

                              className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                            <input
                              type="text"
                              placeholder="Enter amount"
                              value={itemAmount}
                              disabled
                              className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
                          </td>
                          <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                            <button
                              onClick={() => deleteItem(item.id)}
                              type='button'
                              className='hover:bg-white rounded'>
                              <TrashIcon className='w-5 h-5' />
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </> :
                  <tr className='text-center py-2' >
                    <td colSpan={6}>

                    </td>
                  </tr>
              }
            </>
          </tbody>
        </table>
      </div>
      <div className='text-center mt-4'>
        <Button htmlType={'button'} rounded={'full'} handleClick={getItems}>
          Add Item
        </Button>
      </div>
      {/* total  */}
      <div className='w-1/4 ml-auto'>
        <div className='grid grid-cols-2'>
          <div>
            <h5 className='font-bold text-primary-500'>Subtotal</h5>
          </div>
          <div>
            10000
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <h5 className='font-bold text-primary-500'>Add discount</h5>
          </div>
          <div>
            10000
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <h5 className='font-bold text-primary-500'>Total</h5>
          </div>
          <div>
            10000
          </div>
        </div>
      </div>
      <AddInvoiceModal
        open={open}
        handleOnClose={() => setOpen(false)}
        getItems={getItems}
      />
    </div>
  )
}

export default AddItemTable