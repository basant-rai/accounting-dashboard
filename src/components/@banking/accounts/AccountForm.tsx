import Goback from '@/components/reusable/Button/Goback'
import ToggleButton from '@/components/reusable/Button/ToggleButton'
import { Button } from '@/components/reusable/Button/button'
import React from 'react'

const AccountForm = () => {
  return (
    <div>
      <div className='inline-flex items-center'>
        <Goback />
        <h5 className="my-2 font-bold px-3 ">
          Add new account
        </h5>
      </div>
      {/* <div className='px-3'>
        <h6 className='font-bold text-xl'>Billing</h6>
        <p className='text-sm text-gray-500'>Billing details appear in your invoice. Invoice Date is used in the dashboard and reports. Select the date you expect to get paid as the Due Date.
        </p>
      </div> */}
      <form className=''>
        <div className="grid grid-cols-2 gap-4">
          <div className=" px-3">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
          </div>
          <div className="w-full px-3">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Number
              <input
                type="text"
                placeholder="Enter Number" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className=" px-3">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Currency
              <input
                type="text"
                placeholder="NP Rupees"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className=" px-3">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Opening Balance
              <input
                type="text"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className=" px-3">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Bank Name</label>
            <input
              type="text"
              placeholder="Enter bank name"
              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
          </div>
          <div className=" px-3">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Bank Phone
              <input
                type="text"
                placeholder="Enter bank phone number"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className=" px-3">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Bank Address
              <input
                type="text"
                placeholder="Enter bank address"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className=" px-3 col-span-2 space-x-2">
            <div className="mb-2 ml-1 font-bold text-sm text-primary-500" >
              Default Account
            </div>
            <ToggleButton />
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

export default AccountForm