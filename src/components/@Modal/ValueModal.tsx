import React, { FunctionComponent } from 'react'
import Modal from '../reusable/Modal/Modal'

interface Props {
  open: boolean,
  handleOnClose: () => void,

}

const ValueModal: FunctionComponent<Props> = ({ open, handleOnClose }) => {
  return (
    <Modal open={open} handleOnClose={handleOnClose}>
      <form>
        <h4 className='font-bold pt-4'>Add value</h4>
        <label className="mt-6 mb-2 ml-1 font-bold text-xs text-slate-700" >Value Name
          <input
            type="text"
            placeholder="eg. Off-White"
            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
        </label>

        <div className=" mt-6">
          <button
            type="button"
            className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft bg-primary-500">Add</button>
        </div>
      </form>
    </Modal>
  )
}

export default ValueModal