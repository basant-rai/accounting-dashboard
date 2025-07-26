'use client'

import { useState } from "react"

import ActionButton from "@/components/reusable/Button/ActionButton"
import ToggleButton from "@/components/reusable/Button/ToggleButton"

import DeleteModal from "@/components/@Modal/DeleteModal"
import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../@types/entities/IModalType"

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const actionData = [
    { name: 'View', href: '/sales/customers/view', key: 'view' },
    { name: 'Edit', href: '/sales/customers/add', key: 'edit' },
    { name: 'Delete', href: '', key: 'delete' }

  ]

  const CUSTOMERS = [

    {
      Header: 'Name',
      accessor: 'date'
    },
    {
      Header: 'Email',
      accessor: 'vendor'
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
    }
  ]

  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <Navbar
          link={'/sales/customers/create'}
          title={'Customers'}
          type={'link'}
        />
        <Body columnData={CUSTOMERS} />
      </div>
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page