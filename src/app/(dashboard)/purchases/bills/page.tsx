'use client'

import { useState } from "react"

import ActionButton from "@/components/reusable/Button/ActionButton"

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"
import DeleteModal from "@/components/@Modal/DeleteModal"

import { IModalType } from "../../../../../@types/entities/IModalType"

const actionData = [
  { name: 'View', href: '/purchases/bills/view', key: 'view' },
  { name: 'Edit', href: '/purchases/bills/edit', key: 'edit' },
  { name: 'Delete', href: '', key: 'delete' }
]

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const BILLSCOLUMN = [
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Vendor',
      accessor: 'account'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Bill date',
      accessor: 'bill_date'
    },
    {
      Header: 'Due date',
      accessor: 'due_date'
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
      <div className='bg-white border-0 rounded-2xl'>
        <Navbar
          link={'/purchases/bills/create'}
          title={'Bills'}
          type={'link'}
        />
        <Body columnData={BILLSCOLUMN} />
      </div>
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page