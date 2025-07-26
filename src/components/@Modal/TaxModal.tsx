import React, { FunctionComponent } from 'react'
import Modal from '../reusable/Modal/Modal'
import { Button } from '../reusable/Button/button'
import TaxTypeSelect from '../reusable/select/tax-type-select/TaxTypeSelect'

interface Props {
  open: boolean,
  handleOnClose: () => void,
  type: 'add' | 'edit' | 'delete'
}

const TaxModal: FunctionComponent<Props> = ({ open, handleOnClose, type }) => {

  return (
    <Modal open={open} handleOnClose={handleOnClose}>
      <form>
        <h4 className='font-bold pt-4 text-lg'>
          {type === 'add' && <span>Add Tax</span>}
          {type === 'edit' && <span>Edit Tax</span>}
        </h4>

        <div className='space-y-4 mt-2'>
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
              Rate(%)<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Choose color"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Type<span className='text-red-500'>*</span>
              <TaxTypeSelect />
            </label>
          </div>
        </div>

        <div className="text-end mt-6">
          <Button htmlType={'button'}>
            {type === 'add' && <span>Save</span>}
            {type === 'edit' && <span>Update</span>}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default TaxModal