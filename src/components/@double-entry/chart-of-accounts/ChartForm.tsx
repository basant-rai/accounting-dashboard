import Goback from '@/components/reusable/Button/Goback'
import ToggleButton from '@/components/reusable/Button/ToggleButton'
import { Button } from '@/components/reusable/Button/button'
import React from 'react'

const ChartForm = () => {
  return (
    <div>
      <div className='inline-flex items-center'>
        <Goback />
        <h5 className="my-2 font-bold px-3 ">
          Add new account
        </h5>
      </div>
      <form className=''>
        <div className="grid grid-cols-2 gap-4 px-3">
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Name
              <input
                type="text"
                placeholder="Enter Name"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="w-full">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Code
              <input
                type="text"
                placeholder="Enter Code"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Type
              <input
                type="text"
                placeholder="Select Type"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Account
              <input
                type="text"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div className="w-full col-span-2">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Description
              <textarea
                placeholder="Enter description"
                rows={10}
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
              />
            </label>
          </div>

          <div className=" col-span-2 space-x-2">
            <div className="mb-2 ml-1 font-bold text-sm text-primary-500" >
              Enabled
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

export default ChartForm