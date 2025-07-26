import Goback from '@/components/reusable/Button/Goback'
import ToggleButton from '@/components/reusable/Button/ToggleButton'
import { Button } from '@/components/reusable/Button/button'
import React from 'react'

const TransferForm = () => {
  return (
    <div>
      <div className='inline-flex items-center'>
        <Goback />
        <h5 className="my-2 font-bold px-3">
          Add new transfer
        </h5>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-4 px-3">
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >From Account</label>
            <input
              type="text"
              placeholder="Select From Account"
              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
          </div>
          <div className="w-full">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              To Account
              <input
                type="text"
                placeholder="Select to Account" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Amount
              <input
                type="text"
                placeholder="NP Rupees"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Date
              <input
                type="date"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Payment Method</label>
            <input
              type="text"
              placeholder="Cash"
              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Reference
              <input
                type="text"
                placeholder="Enter reference"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Bank Address
              <input
                type="text"
                placeholder="Enter bank address"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="w-full col-span-2">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Description
              <textarea
                placeholder="abcdefg"
                rows={10}
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              />
            </label>
          </div>

          <div className='col-span-2'>
            <label htmlFor='attachment' className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500">
              Attachment
              <div className='border border-dashed border-primary-500 rounded-lg py-10 text-center'>
                Drop file here to upload
              </div>
            </label>
            <input id='attachment' type='file' className='hidden' />
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

export default TransferForm