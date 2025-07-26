'use client'

import { useState } from "react"

import ActionButton from "@/components/reusable/Button/ActionButton"
import DeleteModal from "@/components/@Modal/DeleteModal"

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../@types/entities/IModalType"

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const actionData = [
    { name: 'View', href: '/double-entry/manual-journal/view', key: 'view' },
    { name: 'Edit', href: '/double-entry/manual-journal/edit', key: 'edit' },
    { name: 'Delete', href: '', key: 'delete' }
  ]

  const JOURNAL = [
    {
      Header: 'Number',
      accessor: 'name'
    },
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Description',
      accessor: 'description'
    },
    {
      Header: 'Reference',
      accessor: 'code'
    },

    {
      Header: 'Action',
      Cell: () => (
        <ActionButton actions={actionData}
          setModalType={setModal}
        />
      )
    }
  ]
  return (
    <div>
      <div className="w-full max-w-full px-8 flex-0 ">
        <div className='bg-white border-0 rounded-2xl'>
          <Navbar
            link={'/double-entry/manual-journal/create'}
            title={'Manual Journal'}
            type={'link'}
          />
          <Body columnData={JOURNAL} />
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