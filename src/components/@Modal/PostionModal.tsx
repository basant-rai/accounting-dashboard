import React, { FunctionComponent } from 'react'
import Modal from '../reusable/Modal/Modal'
import { Button } from '../reusable/Button/button'

interface Props {
  open: boolean,
  handleOnClose: () => void,

}

const PositionModal: FunctionComponent<Props> = ({ open, handleOnClose }) => {
  return (
    <Modal open={open} handleOnClose={handleOnClose}>
      <form>
        <h4 className='font-bold pt-4'>Add Position</h4>
        <label className="mt-6 mb-2 ml-1 font-bold text-xs text-primary-500" >Postion Name
          <input
            type="text"
            placeholder="eg. Off-White"
            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
        </label>

        <div className=" mt-6">
          <Button htmlType={'button'}>
              Save
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default PositionModal