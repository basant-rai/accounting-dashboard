'use client'

import VariantModal from '@/components/@Modal/VariantModal'
import Goback from '@/components/reusable/Button/Goback'
import { Button } from '@/components/reusable/Button/button'
import Taxselect from '@/components/reusable/TaxSelect/Taxselect'
import CategorySelect from '@/components/reusable/category-select/CategorySelect'
import UnitSelect from '@/components/reusable/unit-select/UnitSelect'
import { TrashIcon } from '@heroicons/react/24/solid'
import React, { useCallback, useState } from 'react'

type IType = 'service' | 'product'

interface IVariant {
  name: string
  value: string
}

const Create = () => {
  const [open, setOpen] = useState(false)
  const [variant, setVariant] = useState<IVariant[]>([])

  const handleAdd = (data: IVariant) => {
    setVariant(prevVariant => [...prevVariant, data])
  }

  function deleteVariant(idx: number) {
    setVariant(prevItem => prevItem.filter((item, index) => index !== idx))
  }

  return (
    <div className='px-8 mt-10'>
      <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
        <div className='inline-flex items-center'>
          <Goback />
          <h5 className="my-2 font-bold px-3 ">
            Add new group
          </h5>
        </div>
        <form className=''>
          <div className="grid grid-cols-2 gap-4">
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Name
                <span className='text-red-500'>*</span>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              </label>
            </div>
            <div className="w-full px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Category
                <CategorySelect />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Tax
                <Taxselect />
              </label>
            </div>
            <div className="w-full px-3 col-span-2">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Description
                <textarea
                  placeholder="Enter description"
                  rows={10}
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Category
                <CategorySelect />
              </label>
            </div>
            <div className=" px-3">
              <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
                Unit<span className='text-red-500'>*</span>
                <UnitSelect />
              </label>
            </div>
            <div className='px-3 col-span-2'>
              <h5 className='font-bold text-primary-500'>
                Variants
                <span className='text-red-500'>*</span>
              </h5>

              {
                variant.map((v, idx) => (
                  <div className='flex items-end space-x-2' key={idx}>
                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <label className='text-sm'>
                          Variant Name
                          <input
                            type="text"
                            defaultValue={v.name}
                            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                        </label>
                      </div>
                      <div>
                        <label className='text-sm'>Variant Value</label>
                        <input
                          type="text"
                          defaultValue={v.value}
                          className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                      </div>
                    </div>
                    <div className=''>
                      <button type='button' onClick={() => deleteVariant(idx)}>
                        <TrashIcon className='h-6 w-6 fill-red-500' />
                      </button>
                    </div>
                  </div>
                ))
              }

              <div className='rounded-full w-full bg-gray-100 hover:bg-gray-200 text-center p-2 hover:cursor-pointer mt-2'
                onClick={() => setOpen(true)}>
                Add
              </div>
            </div>
          </div>
          <div className="text-end mt-6">
            <Button htmlType='button'>
              Save
            </Button>
          </div>
        </form>
      </div>

      <VariantModal
        open={open}
        handleOnClose={() => setOpen(false)}
      />
    </div>
  )
}

export default Create