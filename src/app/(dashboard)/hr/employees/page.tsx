'use client'

import { useState } from "react"

import DeleteModal from "@/components/@Modal/DeleteModal"
import ActionButton from "@/components/reusable/Button/ActionButton"
import ToggleButton from "@/components/reusable/Button/ToggleButton"

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../@types/entities/IModalType"

const actionData = [
  // { name: 'View', href: '/hr/employees/view' },
  { name: 'Edit', href: '/hr/employees/edit', key: 'edit' },
  { name: 'Delete', href: '', key: 'delete' }

]

const Page = () => {
  const [modal, setModal] = useState<IModalType | null>(null)

  const EMPLOYEES = [
    {
      Header: 'Name',
      accessor: 'vendor'
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
            link={'/hr/employees/create'}
            title={'Employees'}
            type={'link'}
          />

          <Body columnData={EMPLOYEES} />
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