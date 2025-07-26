'use client'

import EntryForm from '@/components/@setting/double-entry/EntryForm'
import InventorySettingForm from '@/components/@setting/inventory/InventorySettingForm'

const Page = () => {
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <div className='p-4'>
          <h3 className=' font-bold text-2xl px-2'>Inventory
          </h3>
          <InventorySettingForm />
        </div>
      </div>
    </div>
  )
}

export default Page