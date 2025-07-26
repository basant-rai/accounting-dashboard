'use client'

import { useState } from "react"

import ActionButton from "@/components/reusable/Button/ActionButton"
import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../@types/entities/IModalType"
import DeleteModal from "@/components/@Modal/DeleteModal"

const actionData = [
  { name: 'View', href: '/banking/transfers/view', key: 'view' },
  { name: 'Edit', href: '/banking/transfers/edit', key: 'delete' },
  { name: 'Delete', href: '', key: 'delete' }
]

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const TRANSFERS = [
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'From Account',
      accessor: 'name'
    },
    {
      Header: 'TO Account',
      accessor: 'account'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Action',
      Cell: () => (
        <ActionButton actions={actionData}
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
            link={'/banking/transfers/create'}
            title={'Transfers'}
            type={'link'}
          />
          <Body columnData={TRANSFERS} />
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