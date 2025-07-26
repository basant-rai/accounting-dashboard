'use client'

import React, { useState } from 'react'

import DeleteModal from '@/components/@Modal/DeleteModal'
import VariantModal from '@/components/@Modal/VariantModal'
import ActionButton from '@/components/reusable/Button/ActionButton'

import ReactTable from '@/components/reusable/table/ReactTable'
import Navbar from '@/layout/navbar/Navbar'

import { IModalType } from '../../../../../@types/entities/IModalType'

const Page = () => {
  const [modalType, setModalType] = useState<IModalType | null>(null)

  const actionData = [
    { name: 'Edit', href: '', key: 'edit' },
    { name: 'Delete', href: '', key: 'delete' }
  ]

  const VARIANTS = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Value',
      accessor: 'vendor'
    },
    {
      Header: 'Action',
      Cell: () => (
        <ActionButton
          actions={actionData}
          setModalType={setModalType}
        />
      )
    },
  ]

  return (
    <div>
      <div className="w-full max-w-full px-8 flex-0 ">
        <div className='bg-white border-0  rounded-2xl'>
          <Navbar
            title={'Variants'}
            type={'modal'}
            setModal={setModalType}
          />
          <ReactTable columnData={VARIANTS} />
        </div>
      </div>

      <VariantModal
        open={modalType === 'add' || modalType === 'edit'}
        handleOnClose={() => setModalType(null)}
      />

      <DeleteModal
        open={modalType === 'delete'}
        handleOnClose={() => setModalType(null)}
      />


    </div>
  )
}

export default Page