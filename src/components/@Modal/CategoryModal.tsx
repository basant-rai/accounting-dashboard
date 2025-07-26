import React, { FunctionComponent } from 'react'
import Modal from '../reusable/Modal/Modal'
import { Button } from '../reusable/Button/button'
import CategoryTypeSelect from '../reusable/select/category-type-select/CategoryTypeSelect'

interface Props {
  open: boolean,
  handleOnClose: () => void,
  type: 'add' | 'edit' | 'delete'
}

const CategoryModal: FunctionComponent<Props> = ({ open, handleOnClose, type }) => {
  return (
    <Modal open={open} handleOnClose={handleOnClose}>
      <form>
        <h4 className='font-bold text-lg'>
          {type === 'add' && <span>Add Category</span>}
          {type === 'edit' && <span>Edit Category</span>}
        </h4>
        <p className='text-sm text-gray-500'>
          The category helps you classify your items, incomes, expenses, and other records.
        </p>
        <div className='space-y-4 mt-2'>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Category Name<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Enter name"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Color<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Choose color"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Type<span className='text-red-500'>*</span>
              <CategoryTypeSelect/>
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Parent Category<span className='text-red-500'>*</span>
              <input
                type="text"
                placeholder="Select parent"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
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

export default CategoryModal