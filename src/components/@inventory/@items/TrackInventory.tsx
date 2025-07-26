import UnitSelect from '@/components/reusable/unit-select/UnitSelect'
import React from 'react'

const TrackInventory = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-6'>
      <div>
        <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
          SKU
          <input
            type="text"
            placeholder="eg. Off-White"
            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
        </label>
      </div>
      <div>
        <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
          Unit<span className='text-red-500'>*</span>
          <UnitSelect />
        </label>
      </div>
      <div>
        <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
          Barcode<span className='text-red-500'>*</span>
          <input
            type="text"
            placeholder="eg. Off-White"
            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
        </label>
      </div>

    </div>
  )
}

export default TrackInventory