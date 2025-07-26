'use client'

import { Button } from '@/components/reusable/Button/button'

const PurchaseForm = () => {
  return (
    <div className='px-2 mt-4'>
      <form className=''>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Number Prefix</label>
            <input
              type="text"
              placeholder="Enter number prefix"
              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Number Digit
              <input type="text"
                placeholder="Enter number digit" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Next Number
              <input
                type="text"
                placeholder="Enter next number"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
        </div>
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

export default PurchaseForm