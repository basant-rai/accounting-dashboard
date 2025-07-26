import React, { useState } from 'react'
import InventorySettingTab from './InventorySettingTab'
import { Button } from '@/components/reusable/Button/button'
import WarehouseSelect from '@/components/reusable/warehouse-select/WarehouseSelect'
import ToggleButton from '@/components/reusable/Button/ToggleButton'

type IType = 'warehouse' | 'barcode' | 'transfer-order' | 'adjustment'

const InventorySettingForm = () => {
  const [tabButton, setTabButton] = useState<IType>('warehouse')
  return (
    <div className='px-2 mt-4'>
      {/* <InventorySettingTab
        setTabButton={setTabButton}
        tabButton={tabButton}
      /> */}
      <form>
        {
          // tabButton === 'warehouse' &&
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5  divide-gray-800'>
            <div className='mt-4'>
              <h5 className=' font-bold text-lg text-gray-800 px-1'>Warehouse</h5>
              <div className="mt-2">
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Default Warehouse
                  </label>
                  <WarehouseSelect />
                </div>
                <div className='flex flex-col md:flex-row gap-4 mt-4 w-full'>
                  <div className="w-full">
                    <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                      Track Inventory
                    </label>
                    <div className='ml-1 mt-2'>
                      <ToggleButton />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                      Negative Stock
                    </label>
                    <div className='ml-1 mt-2'>
                      <ToggleButton />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                      Reorder Level
                    </label>
                    <div className='ml-1 mt-2'>
                      <ToggleButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <h5 className=' font-bold text-lg text-gray-800 px-1'>Barcode</h5>
              <div className="mt-2">
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Barcode Type
                  </label>
                  <WarehouseSelect />
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <h5 className=' font-bold text-lg text-gray-800 px-1'>Transfer Order</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                    Number Prefix
                    <input type="text"
                      placeholder="Enter number prefix" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                    Number Digit
                    <input type="text"
                      placeholder="Enter number digit" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                    Next Number
                    <input
                      type="text"
                      placeholder="Enter next number"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <h5 className=' font-bold text-lg text-gray-800 px-1'>Adjustment</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                    Number Prefix
                    <input type="text"
                      placeholder="Enter number prefix" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                    Number Digit
                    <input type="text"
                      placeholder="Enter number digit" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                    Next Number
                    <input
                      type="text"
                      placeholder="Enter next number"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        }
        <div className="flex mt-6 justify-end">
          <div>
            <Button type={"primary"} rounded={"small"} border={"primary"} htmlType={'button'}>
              Save
            </Button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default InventorySettingForm