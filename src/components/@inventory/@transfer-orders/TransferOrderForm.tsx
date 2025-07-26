'use client'

import { Button } from "@/components/reusable/Button/button"
import WarehouseSelect from "@/components/reusable/warehouse-select/WarehouseSelect"

const TransferOrderForm = () => {
  return (
    <div>
      <form className=''>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-3">
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Transfer Order<span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Enter transfer order"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Transfer order number<span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Enter transfer order number"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Date<span className="text-red-500">*</span>
              <input
                type="date"
                placeholder="eg. Off-White"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Source warehouse<span className="text-red-500">*</span>
              <WarehouseSelect />
            </label>
          </div>
          <div className="sm:col-span-2">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Reason
              <textarea
                placeholder="Enter reason"
                rows={10}
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              />
            </label>
          </div>
        </div>
        <div className="text-end mt-6">
          <Button htmlType={'submit'}>Save</Button>
        </div>
      </form>
    </div>
  )
}

export default TransferOrderForm