'use client'

import ValueModal from '@/components/@Modal/ValueModal'
import Goback from '@/components/reusable/Button/Goback'
import { TrashIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

const Page = () => {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [inputs, setInputs] = useState<number[]>([]);

  function handleAdd() {
    setCount(count + 1)
    setInputs([...inputs, count])
  }

  function deleteValue(idx: number) {
    setInputs(prevItem => prevItem.filter((item, index) => index !== idx))
  }

  return (
    <div className='px-8 mt-10'>
      <div className="w-1/2 mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
        <div className='inline-flex items-center'>
          <Goback />
          <h5 className="my-2 font-bold px-3 ">
            Add new variant
          </h5>
        </div>
        <form className=''>
          <div className="grid grid-cols-2 gap-4">
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700" >Name</label>
              <input
                type="text"
                placeholder="eg. Color"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </div>
            <div className='px-3 col-span-2'>
              <div className='font-bold text-primary-500'>Value</div>
              <div className='space-y-2'>
                {
                  inputs.map((i, index) => (
                    <div className='flex space-x-2 ' key={i}>
                      <input
                        type="text"
                        placeholder="eg. white"
                        className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                      <button type='button' onClick={() => deleteValue(index)}>
                        <TrashIcon className='h-5 w-5 fill-red-500' />
                      </button>
                    </div>
                  ))
                }
              </div>
              <div className='rounded-full w-full bg-gray-100 hover:bg-gray-200 text-center p-2 hover:cursor-pointer mt-2'
                onClick={handleAdd}
              >
                Add
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <button type="button" aria-controls="media" next-form-btn="" className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25">Save</button>
          </div>
        </form>
      </div>

      <ValueModal
        open={open}
        handleOnClose={() => setOpen(false)}
      />
    </div>
  )
}

export default Page