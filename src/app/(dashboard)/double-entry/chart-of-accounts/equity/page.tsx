'use client'

import { useState } from "react"

import ActionButton from "@/components/reusable/Button/ActionButton"
import ToggleButton from "@/components/reusable/Button/ToggleButton"

import ChartEntryBody from "@/components/@double-entry/chart-of-accounts/ChartEntryBody"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../../@types/entities/IModalType"
import DeleteModal from "@/components/@Modal/DeleteModal"

const actionData = [
  // { name: 'View', href: '/banking/accounts/view' },
  { name: 'Edit', href: '/double-entry/chart-of-accounts/edit', key: 'edit' },
  { name: 'Delete', href: '', key: 'delete' }
]


const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const EQUITY = [
    {
      Header: 'Code',
      accessor: 'code'
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Type',
      accessor: 'category'
    },
    {
      Header: 'Balance',
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
          link={'/double-entry/chart-of-accounts/create'}
          title={'Chart of account'}
          type={'link'}
        />
        <ChartEntryBody columnData={EQUITY} title="equity" />
      </div>
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page