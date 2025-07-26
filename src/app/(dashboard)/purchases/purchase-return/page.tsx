'use client'

import { useState } from "react"

import ActionButton from "@/components/reusable/Button/ActionButton"

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../@types/entities/IModalType"
import DeleteModal from "@/components/@Modal/DeleteModal"

const actionData = [
  { name: 'View', href: '/purchases/purchase-return/view', key: 'view' },
  { name: 'Edit', href: '/purchases/purchase-return/edit', key: 'edit' },
  { name: 'Delete', href: '', key: 'delete' }
]

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const PURCHASE_RETURN = [

    {
      Header: 'Debit note number',
      accessor: 'account'
    },
    {
      Header: 'Vendor',
      accessor: 'vendor'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },

    {
      Header: 'debit note date',
      accessor: 'date'
    },
    {
      Header: 'Status',
      accessor: 'status'
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
          link={'/purchases/purchase-return/create'}
          title={'Purchase Return'}
          type={'link'}
        />
        <Body columnData={PURCHASE_RETURN} />
      </div>

      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page