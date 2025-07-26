import Goback from '@/components/reusable/Button/Goback'
import { Button } from '@/components/reusable/Button/button'
import React from 'react'

const PaymentForm= () => {
  return (
    <div>
      <div className='inline-flex items-center'>
        <Goback />
        <h5 className="my-2 font-bold px-3 ">
          Add new payment
        </h5>
      </div>

      <form className=''>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-3">
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Date
              <input
                type="date"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Amount
              <input
                type="text"
                placeholder="eg. TO-00001"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Account<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="eg. TO-00001"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Chart of account
              <input
                type="text"
                placeholder="eg. Off-White"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Vendor
              <input
                type="text"
                placeholder="eg. Off-White"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Category
              <input
                type="text"
                placeholder="eg. Off-White"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Recurring
              <input
                type="text"
                placeholder="eg. Off-White"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Payment method
              <input
                type="text"
                placeholder="eg. Off-White"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Bill
              <input
                type="text"
                placeholder="eg. Off-White"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Invoice
              <input
                type="text"
                placeholder="eg. Off-White"
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>

          <div className="col-span-2">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Description
              <textarea
                placeholder="Enter description"
                rows={5}
                className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
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
        <div className="text-end mt-6">
          <Button htmlType={'submit'} >Save</Button>
        </div>
      </form>
    </div>

  )
}

export default PaymentForm
