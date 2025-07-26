import React, { FunctionComponent, useCallback, useState } from 'react'
import Modal from '../reusable/Modal/Modal'
import { Controller, useForm } from 'react-hook-form'
import { Variant } from '@/formdata/Variant'
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { TrashIcon } from '@heroicons/react/24/solid';

interface Props {
  open: boolean,
  handleOnClose: () => void,
  // handleAdd: any

}

const VariantModal: FunctionComponent<Props> = ({ open, handleOnClose }) => {

  const [count, setCount] = useState(0)
  const [inputs, setInputs] = useState<number[]>([]);

  function handleAddValue() {
    setCount(count + 1)
    setInputs([...inputs, count])
  }

  function deleteValue(idx: number) {
    setInputs(prevItem => prevItem.filter((item, index) => index !== idx))
  }

  const { control, formState: { errors, isSubmitting }, handleSubmit, reset } = useForm<Variant>({
    resolver: classValidatorResolver(Variant),

  })

  const handleSave = useCallback((data: Variant) => {
    // handleAdd(data)
    reset()
  }, [reset])

  return (
    <Modal open={open} handleOnClose={handleOnClose}>
      <form onSubmit={handleSubmit(handleSave)}>
        <h4 className='font-bold pt-4'>Add variant type</h4>
        <div>
          <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >
            Name
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="eg. Off-White"
                  value={field.value ?? ''}
                  onChange={e => field.onChange(e.target.value)}
                  className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
              )}
            />
            {errors.name &&
              <span className="text-red-500 text-xs font-normal">{errors.name.message}</span>}
          </label>
        </div>

        {/* <label className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700" >
          Select value
          <Controller
            name='value'
            control={control}
            render={({ field }) => (
              <input
                type="text"
                value={field.value ?? ''}
                onChange={e => field.onChange(e.target.value)}
                placeholder="eg. Off-White"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            )}
          />
          {errors.value &&
            <span className="text-red-500 text-xs font-normal">{errors.value.message}</span>}
        </label> */}
        <div className=''>
          <div className='font-bold text-primary-500 text-sm'>Value</div>
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
            onClick={handleAddValue}
          >
            Add
          </div>
        </div>
        <div className=" mt-6">
          <button
            type="submit"
            className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft bg-primary-500">Save</button>

          {/* <Button
            type={"primary"}
            rounded={"small"}
            border={"primary"}
            htmlType={'submit'}
          >
            Save
          </Button> */}
        </div>
      </form>
    </Modal>
  )
}

export default VariantModal