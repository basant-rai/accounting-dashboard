'use client'

import { Button } from '@/components/reusable/Button/button'

const EntryForm = () => {
  return (
    <div className='px-2 mt-4'>
      <form className=''>

        <div className=''>
          <h5 className=' font-bold text-md text-gray-800 px-1'>Default chat of accounts</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Accounts Receivable</label>
              <input
                type="text"
                placeholder="Enter number prefix"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Accounts Payable
                <input type="text"
                  placeholder="Enter number digit" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Sales
                <input
                  type="text"
                  placeholder="Enter next number"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                General Expenses
                <input
                  type="text"
                  placeholder="Enter next number"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Sales Discount
                <input
                  type="text"
                  placeholder="Enter next number"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Purchase Discount
                <input
                  type="text"
                  placeholder="Enter next number"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Owners Contribution
                <input
                  type="text"
                  placeholder="Enter next number"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <h5 className=' font-bold text-md text-gray-800 px-1'>Default Types</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Bank & Cash</label>
              <input
                type="text"
                placeholder="Enter bank & cash"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Tax</label>
              <input
                type="text"
                placeholder="Enter bank & cash"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
          </div>
        </div>

        <div className='mt-8 '>
          <h5 className=' font-bold text-md text-gray-800 px-1'>Manual Journal Entry
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Number Prefix</label>
              <input
                type="text"
                placeholder="Enter bank & cash"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >NUmber Digit</label>
              <input
                type="text"
                placeholder="Enter bank & cash"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className="">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Next NUmber</label>
              <input
                type="text"
                placeholder="Enter bank & cash"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
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

export default EntryForm