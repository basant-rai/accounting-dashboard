'use client'

import TrackInventory from '@/components/@inventory/@items/TrackInventory'
import Goback from '@/components/reusable/Button/Goback'
import { Button } from '@/components/reusable/Button/button'
import Taxselect from '@/components/reusable/TaxSelect/Taxselect'
import CategorySelect from '@/components/reusable/category-select/CategorySelect'

import { ItemFormData } from '@/formdata/inventory/ItemForm'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { useRouter } from 'next/navigation'

import React, { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

type IType = 'service' | 'product'

const ItemForm = () => {
  const [btnType, setBtnType] = useState<IType>('product')
  const [trackInventory, setTrackInventory] = useState(false)

  const router = useRouter();

  const handleType = useCallback((type: IType) => {
    if (type) {
      setBtnType(type)
    }
  }, [])

  useEffect(() => {
    if (btnType === 'service') {
      setTrackInventory(false)
    }
  }, [btnType])

  const { control, formState: { errors, isSubmitting }, handleSubmit } = useForm<ItemFormData>({
    resolver: classValidatorResolver(ItemFormData)
  })

  const handleSave = useCallback(() => {

  }, [])

  return (
    <div>
      <div className='inline-flex items-center'>
        <Goback />
        <div className="my-2 font-bold px-3 ">
          {btnType === 'product' && <span>Add Product Information</span>}
          {btnType === 'service' && <span>Add Service Information</span>}
        </div>
      </div>
      <p className='px-3 font-bold text-sm mt-4 text-primary-500'>Type</p>
      <div className='flex gap-4 px-3 py-2'>
        <button
          className={`${btnType === 'product' ? 'bg-primary-500 text-white' : 'bg-white border border-primary-500 text-primary-500'} px-8 py-2 rounded-lg  text-sm`}
          onClick={() => handleType('product')}
        >
          Product
        </button>
        <button
          className={`${btnType === 'service' ? 'bg-primary-500 text-white' : 'bg-white border border-primary-500 text-primary-500'} px-8 py-2 rounded-lg  text-sm`}
          onClick={() => handleType('service')}>
          Service
        </button>
      </div>

      <form className='mt-2' onSubmit={handleSubmit(handleSave)}>
        <div className="grid grid-cols-2 gap-4 px-3">
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Name <span className='text-red-500'>*</span>
              <Controller
                name='name'
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Enter name"
                    value={field.value ?? ""}
                    onChange={e => field.onChange(e.target.value)}
                    className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                )}
              />
              {errors.name && <span className="text-red-500 text-xs font-normal ml-2">{errors.name.message}</span>}
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Category
              <CategorySelect />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Tax</label>
            <Taxselect />
          </div>
          <div className="w-full col-span-2">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Description
              <Controller
                name='description'
                control={control}
                render={({ field }) => (
                  <textarea
                    placeholder="Enter description"
                    rows={10}
                    value={field.value ?? ""}
                    onChange={e => field.onChange(e.target.value)}
                    className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                  />
                )}
              />
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Sale Price<span className='text-red-500'>*</span>
              <Controller
                name='sale_price'
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Enter sale price"
                    className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                )} />
              {errors.sale_price && <span className="text-red-500 text-xs font-normal ml-2">{errors.sale_price.message}</span>}
            </label>
          </div>
          <div className="">
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Purchase price<span className='text-red-500'>*</span>
              <Controller
                name='purchase_price'
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Enter purchase price"
                    className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                )}
              />
              {errors.purchase_price && <span className="text-red-500 text-xs font-normal ml-2">{errors.purchase_price.message}</span>}

            </label>
          </div>
          <div className=''>
            <h5 className='font-bold text-primary-500'>Inventory</h5>
            <p className='text-sm text-gray-500'>Accounting and inventory management under one roof
            </p>
            <div className='space-x-5 py-2'>
              <label className='text-sm text-primary-500'>
                <input type='checkbox' />
                <span> Returnable Item</span>
              </label>
              <label className={`${btnType === 'service' && 'hidden'} text-sm text-primary-500`}>
                <input
                  disabled={btnType === 'service'}
                  checked={trackInventory}
                  onChange={e => {
                    btnType === 'service' ?
                      setTrackInventory(false) :
                      setTrackInventory(e.target.checked)
                  }}
                  type='checkbox'
                />
                <span > Track Inventory</span>
              </label>
            </div>
          </div>
          <div className='col-span-2'>
            {
              trackInventory &&
              <TrackInventory />
            }
          </div>
        </div>
        <div className="text-end mt-6">
          <Button htmlType={'submit'}>Save</Button>
        </div>
      </form>
    </div>
  )
}

export default ItemForm