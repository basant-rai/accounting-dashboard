import Goback from '@/components/reusable/Button/Goback'
import ToggleButton from '@/components/reusable/Button/ToggleButton'
import { Button } from '@/components/reusable/Button/button'
import React from 'react'

const EmployeesForm = () => {
  return (
    <div>
      <div className='inline-flex items-center'>
        <Goback />
        <h5 className="my-2 font-bold px-3 ">
          Add new employee
        </h5>
      </div>
      <form className=''>
        <div className='p-3 '>
          <h5 className='px-3 my-2 font-bold text-xl'>Personal Information</h5>
          <div className="grid grid-cols-2 gap-4">
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Name</label>
              <input
                type="text"

                placeholder="eg. Off-White"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className="w-full px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Email
                <input type="text" name="Weight" placeholder="eg. 42" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Phone</label>
              <input
                type="text"

                placeholder="eg. Off-White"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Date Of Birth</label>
              <input
                type="text"

                placeholder="eg. Off-White"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Country
                <input
                  type="text"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Town / City</label>
              <input
                type="text"

                placeholder="eg. Off-White"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>

            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Province / State
                <input
                  type="text"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>

            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Position
                <input
                  type="text"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Gender
                <input
                  type="text"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className=" px-3 col-span-2 space-x-2">
              <div className="mb-2 ml-1 font-bold text-sm text-primary-500" >
                Enabled
              </div>
              <ToggleButton />
            </div>
          </div>
        </div>

        <div className='p-3 '>
          <h5 className='px-3 my-2 font-bold text-xl'>Salary</h5>
          <div className="grid grid-cols-2 gap-4">
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Amount
                <input
                  type="text"
                  placeholder="eg. Off-White"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className="w-full px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Currency
                <input type="text" name="Weight" placeholder="eg. 42" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Tax Number
                <input
                  type="text"
                  placeholder="eg. Off-White"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Bank Account Number
                <input
                  type="text"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Hire Date
                <input
                  type="date"
                  placeholder="eg. Off-White"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>

            <div className='col-span-2 px-3'>
              <label htmlFor='attachment' className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500">
                Attachment
                <div className='border border-dashed border-primary-500 rounded-lg py-10 text-center'>
                  Drop file here to upload
                </div>
              </label>
              <input id='attachment' type='file' className='hidden' />
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

export default EmployeesForm