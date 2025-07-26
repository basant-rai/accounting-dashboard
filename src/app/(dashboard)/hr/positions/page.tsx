'use client'

import { useState } from "react"

import PositionModal from "@/components/@Modal/PostionModal"
import ActionButton from "@/components/reusable/Button/ActionButton"
import ToggleButton from "@/components/reusable/Button/ToggleButton"

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../@types/entities/IModalType"
import DeleteModal from "@/components/@Modal/DeleteModal"

const actionData = [
  // { name: 'View', href: '/hr/employees/view', key: 'delete' },
  { name: 'Edit', href: '', key: 'edit' },
  { name: 'Delete', href: '', key: 'delete' }
]

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const POSITIONS = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Hire date',
      accessor: 'date'
    },
    {
      Header: 'Status',
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
      <div className="w-full max-w-full px-8 flex-0 ">
        <div className='bg-white border-0  rounded-2xl'>
          <Navbar
            title={'Positions'}
            type={'modal'}
            setModal={setModal}
          />
          <Body columnData={POSITIONS} />
        </div>
      </div>

      <PositionModal
        open={modal === 'add' || modal === 'edit'}
        handleOnClose={() => setModal(null)}
      />
      <DeleteModal
        open={modal === 'delete'}
        handleOnClose={() => setModal(null)}
      />
    </div>
  )
}

export default Page