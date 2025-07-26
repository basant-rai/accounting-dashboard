'use client'

import Goback from '@/components/reusable/Button/Goback'
import ToggleButton from '@/components/reusable/Button/ToggleButton'
import { Button } from '@/components/reusable/Button/button'
import React from 'react'

export const CreateWarehouseForm = () => {
  return (
    <div className='px-8 mt-10'>
      <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
        <div className='inline-flex items-center'>
          <Goback />
          <h5 className="my-2 font-bold px-3 ">
            Add new Warehouse
          </h5>
        </div>
        <form className=''>
          <div className="grid grid-cols-2 gap-4">
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Name</label>
              <input
                type="text"
                name="ProductName"
                placeholder="eg. Off-White"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className="w-full px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >
                Email
                <input type="text" name="Weight" placeholder="eg. 42" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Phone</label>
              <input
                type="text"
                name="ProductName"
                placeholder="eg. Off-White"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>

            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Country
                <input
                  type="text"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Town / City</label>
              <input
                type="text"
                name="ProductName"
                placeholder="eg. Off-White"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Postal / Zip code</label>
              <input
                type="text"
                name="ProductName"
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

            <div className="w-full px-3 col-span-2">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >
                Description
                <textarea
                  placeholder="abcdefg"
                  rows={10}
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                />
              </label>
            </div>

            <div className=" px-3 col-span-2 space-x-2">
              <div className="mb-2 ml-1 font-bold text-sm text-slate-700" >
                Default warehouse
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
    </div>
  )
}
