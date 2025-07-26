import React, { FunctionComponent } from 'react'
import Modal from '../reusable/Modal/Modal'
import { Button } from '../reusable/Button/button'
import ToggleButton from '../reusable/Button/ToggleButton'
import SymbolPositionSelect from '../reusable/select/symbol-position-select/SymbolPositionSelect'

interface Props {
  open: boolean,
  handleOnClose: () => void,
  type: 'add' | 'edit' | 'delete'

}

const CurrencyModal: FunctionComponent<Props> = ({ open, handleOnClose, type }) => {
  return (
    <Modal open={open} handleOnClose={handleOnClose}>
      <form>
        <h4 className='font-bold text-lg'>
          {type === 'add' && <span>Add Currency</span>}
          {type === 'edit' && <span>Edit Currency</span>}
        </h4>

        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Name<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Enter name"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Code<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Enter code"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Rate<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Enter rate"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Precision<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Choose precison"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Symbol<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Enter symbol"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Symbol Position<span className='text-red-500'>*</span>
              <SymbolPositionSelect />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Decimal Mark<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Enter decimal mark"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Thousand Separator<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Enter separator"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <div className="my-2 ml-1 font-bold text-sm text-primary-500" >
              Default Currency
            </div>
            <ToggleButton />
          </div>
        </div>

        <div className="text-end mt-6">
          <Button htmlType={'button'}>
            Save
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default CurrencyModal