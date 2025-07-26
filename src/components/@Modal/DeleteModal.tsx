import React, { FunctionComponent } from 'react'
import Modal from '../reusable/Modal/Modal'
import { Button } from '../reusable/Button/button'

interface Props {
  open: boolean,
  handleOnClose: () => void,

}

const DeleteModal: FunctionComponent<Props> = ({ open, handleOnClose }) => {
  return (
    <Modal open={open} handleOnClose={handleOnClose}>
      <form>
        <h4 className='font-bold pt-4 text-lg'>Delete</h4>
        <p>Are you sure you want to delete?</p>
        <div className="text-end mt-6">
          <Button htmlType={'button'}>
            Delete
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default DeleteModal