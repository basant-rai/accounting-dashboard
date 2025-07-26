import React, { FunctionComponent } from 'react'
import { MainSidebar } from '../main-sidebar/Mainsidebar'
import Sidebar from './Sidebar'
import SidebarTransition from '@/components/reusable/Transition/Transition'
import { Dialog } from '@headlessui/react'

interface Props {
  show: boolean
  handleShow: () => void
}

const SmallSIdebar: FunctionComponent<Props> = ({ show, handleShow }) => {
  return (
    <SidebarTransition show={show} handleShow={handleShow}>
      <Dialog.Panel>
        <div className='flex'>
          <MainSidebar />
          <Sidebar />
        </div>
      </Dialog.Panel>
    </SidebarTransition>
  )
}

export default SmallSIdebar