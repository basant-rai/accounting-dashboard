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
    { name: 'Edit', href: '/inventory/warehouses/edit', key: 'edit' },
    { name: 'Delete', href: '', key: 'delete' }
  ]

  const WAREHOUSES = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Phone',
      accessor: 'code'
    },
    {
      Header: 'Total Items',
      accessor: 'vendor'
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
    <div>
      <div className="w-full max-w-full px-8 flex-0 ">
        <div className='bg-white border-0  rounded-2xl'>
          <Navbar
            link={'/inventory/warehouses/create'}
            title={'Warehouses'}
            type={'link'}
          />

          {/* <WarehouseTable /> */}
          <Body columnData={WAREHOUSES} />
        </div>
      </div>
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page