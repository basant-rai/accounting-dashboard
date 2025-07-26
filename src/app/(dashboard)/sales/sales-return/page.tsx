'use client'

import { useState } from "react"

import DeleteModal from "@/components/@Modal/DeleteModal"
import ActionButton from "@/components/reusable/Button/ActionButton"

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../@types/entities/IModalType"

const actionData = [
  { name: 'View', href: '/sales/sales-return/view', key: 'view' },
  { name: 'Edit', href: '/sales/sales-return/edit', key: 'edit' },
  { name: 'Delete', href: '', key: 'delete' }
]

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const SALES_RETURN = [
    {
      Header: 'Credit note number',
      accessor: 'date'
    },
    {
      Header: 'Customer',
      accessor: 'vendor'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Credit note date',
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
    }
  ]

  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <Navbar
          link={'/sales/sales-return/create'}
          title={'Sales Return'}
          type={'link'}
        />
        <Body columnData={SALES_RETURN} />
      </div>
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page