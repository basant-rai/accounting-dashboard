'use client'

import React, { FunctionComponent, useCallback, useState } from 'react'
import Modal from '../reusable/Modal/Modal'
import { Controller, useForm } from 'react-hook-form'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { InvoiceItem } from '@/formdata/InvoiceItem'
import { Button } from '../reusable/Button/button'

interface Props {
  open: boolean,
  handleOnClose: () => void,
  getItems: Function

}

const AddInvoiceModal: FunctionComponent<Props> = ({ open, handleOnClose, getItems }) => {


  const { control, formState: { errors, isSubmitting }, handleSubmit, reset } = useForm<InvoiceItem>({
    resolver: classValidatorResolver(InvoiceItem)
  })

  const handleAdd = useCallback((data: InvoiceItem) => {
    const { item_name, description, quantity, price } = data
    getItems(data)
    reset()
  }, [getItems, reset])


  return (
    <Modal open={open} handleOnClose={handleOnClose}>
      <h4 className='font-bold pt-4'>Add Item</h4>
      <form className='mt-2 space-y-2' onSubmit={handleSubmit(handleAdd)}>
        <div>
          <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
            Item Name
            <Controller
              name='item_name'
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Enter item name"
                  value={field.value ?? ''}
                  onChange={e => field.onChange(e.target.value)}
                  className="text-sm leading-5.6 block w-full appearance-none rounded-lg border border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              )}
            />
            {errors.item_name &&
              <span className="text-red-500 text-xs font-normal">{errors.item_name.message}</span>}
          </label>
        </div>

        <div>
          <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
            Qunatity
            <Controller
              name='quantity'
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Enter quantity"
                  value={field.value ?? ''}
                  onChange={e => field.onChange(e.target.value)}
                  className="text-sm leading-5.6 block w-full appearance-none rounded-lg border border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              )}
            />
            {errors.quantity &&
              <span className="text-red-500 text-xs font-normal">{errors.quantity.message}</span>}
          </label>
        </div>

        <div>
          <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
            Price
            <Controller
              name='price'
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Enter price"
                  value={field.value ?? ''}
                  onChange={e => field.onChange(e.target.value)}
                  className="text-sm leading-5.6 block w-full appearance-none rounded-lg border border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              )}
            />
            {errors.price &&
              <span className="text-red-500 text-xs font-normal">{errors.price.message}</span>}
          </label>
        </div>

        <div>
          <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
            Amount
            <Controller
              name='amount'
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={field.value ?? ''}
                  onChange={e => field.onChange(e.target.value)}
                  className="text-sm leading-5.6 block w-full appearance-none rounded-lg border border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              )}
            />
            {errors.amount &&
              <span className="text-red-500 text-xs font-normal">{errors.amount.message}</span>}
          </label>
        </div>

        <div>
          <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
            Description
            <Controller
              name='description'
              control={control}
              render={({ field }) => (
                <textarea
                  rows={10}
                  placeholder="Add description"
                  value={field.value ?? ''}
                  onChange={e => field.onChange(e.target.value)}
                  className="text-sm leading-5.6 block w-full appearance-none rounded-lg border border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              )}
            />
            {errors.description &&
              <span className="text-red-500 text-xs font-normal">{errors.description.message}</span>}
          </label>
        </div>
        <div className=" mt-6">
          <Button htmlType={'submit'}>
            Add
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddInvoiceModal