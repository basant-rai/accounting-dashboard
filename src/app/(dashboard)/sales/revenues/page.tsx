'use client'

import { useState } from "react"

import DeleteModal from "@/components/@Modal/DeleteModal"
import ActionButton from "@/components/reusable/Button/ActionButton"

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"
import { IModalType } from "../../../../../@types/entities/IModalType"

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const actionData = [
    { name: 'View', href: '/sales/revenues/view', key: 'view' },
    { name: 'Edit', href: '/sales/revenues/edit', key: 'edit' },
    { name: 'Delete', href: '', key: 'delete' }
  ]

  const REVENUES = [
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Customer',
      accessor: 'name'
    },
    {
      Header: 'Category',
      accessor: 'category'
    },
    {
      Header: 'Account',
      accessor: 'account'
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
          link={'/sales/revenues/create'}
          title={'Revenues'}
          type={'link'}
        />
        <Body columnData={REVENUES} />
      </div>
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page