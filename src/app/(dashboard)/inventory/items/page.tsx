'use client'

import React, { useState } from 'react'

import DeleteModal from '@/components/@Modal/DeleteModal'
import ActionButton from '@/components/reusable/Button/ActionButton'
import ToggleButton from '@/components/reusable/Button/ToggleButton'

import Body from '@/components/reusable/body/Body'
import Navbar from '@/layout/navbar/Navbar'

import { IModalType } from '../../../../../@types/entities/IModalType'

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const actionData = [
    // { name: 'View', href: '/banking/accounts/view' },
    { name: 'Edit', href: '/inventory/items/edit', key: 'edit' },
    { name: 'Delete', href: '', key: 'delete' }

  ]

  const ITEMS = [
    {
      Header: 'Product',
      accessor: 'name',
      Cell: () => (
        <div className="inline-flex items-center font-medium text-gray-900 whitespace-nowrap ">
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
            alt="iMac Front Image"
            className="w-auto h-8 mr-3" />
          Apple iMac 27&#34;
        </div>
      )
    },
    {
      Header: 'Category',
      accessor: 'vendor'
    },
    {
      Header: 'Stock',
      accessor: 'code'
    },
    {
      Header: 'Sales price',
      accessor: 'amount'
    },
    {
      Header: 'Purchase price',
      accessor: 'date'
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
    <div>
      <div className="w-full max-w-full px-8 flex-0">
        <div className='bg-white border-0  rounded-2xl'>
          <Navbar
            link={'/inventory/items/create'}
            title={'Items'}
            type={'link'}
          />
          {/* <ItemTable /> */}
          <Body columnData={ITEMS} />

        </div>
      </div>
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div >
  )
}

export default Page