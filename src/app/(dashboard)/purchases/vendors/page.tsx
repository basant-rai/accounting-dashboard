'use client'

import { useState } from "react"

import ActionButton from "@/components/reusable/Button/ActionButton"
import ToggleButton from "@/components/reusable/Button/ToggleButton"

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../@types/entities/IModalType"
import DeleteModal from "@/components/@Modal/DeleteModal"

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const actionData = [
    { name: 'View', href: '/purchases/vendors/view', key: 'view' },
    { name: 'Edit', href: '/purchases/vendors/edit', key: 'edit' },
    { name: 'Delete', href: '', key: 'delete' }
  ]

  const VENDORS = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Unpaid',
      accessor: 'amount'
    },
    {
      Header: 'Enabled',
      Cell: () => (
        <ToggleButton />
      )
    },
    {
      Header: 'Action',
      Cell: () => (
        <ActionButton
          actions={actionData}
          setModalType={setModal}
        />
      )
    },
  ]

  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0  rounded-2xl'>
        <Navbar
          link={'/purchases/vendors/create'}
          title={'Vendors'}
          type={'link'}
        />
        <Body columnData={VENDORS} />
      </div>
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page