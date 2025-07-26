'use client'

import React, { useState } from 'react'

import DeleteModal from '@/components/@Modal/DeleteModal'
import ActionButton from '@/components/reusable/Button/ActionButton'

import Body from '@/components/reusable/body/Body'
import Navbar from '@/layout/navbar/Navbar'

import { IModalType } from '../../../../../@types/entities/IModalType'

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const actionData = [
    { name: 'View', href: '/sales/invoices/view', key: 'view' },
    { name: 'Edit', href: '/sales/invoices/edit', key: 'edit' },
    { name: 'Delete', href: '', key: 'delete' },

  ]

  const INVOICES = [
    {
      Header: 'Number',
      accessor: 'account'
    },
    {
      Header: 'Customer',
      accessor: 'name'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Invoice Date',
      accessor: 'date'
    },
    {
      Header: 'Due Date',
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
      <div className='bg-white border-0  rounded-2xl'>
        <Navbar
          link={'/sales/invoices/create'}
          title={'Invoices'}
          type={'link'}
        />
        <Body columnData={INVOICES} />
      </div>
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page