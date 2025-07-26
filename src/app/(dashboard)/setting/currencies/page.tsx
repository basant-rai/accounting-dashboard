'use client'

import { useState } from "react"

import CurrencyModal from "@/components/@Modal/CurrencyModal"
import ActionButton from "@/components/reusable/Button/ActionButton"
import ToggleButton from "@/components/reusable/Button/ToggleButton"

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

import { IModalType } from "../../../../../@types/entities/IModalType"
import DeleteModal from "@/components/@Modal/DeleteModal"

const Page = () => {
  const [modalType, setModalType] = useState<IModalType | null>(null)

  const actionData = [
    { name: 'Edit', href: '', key: 'edit' },
    { name: 'Delete', href: '', key: 'delete' }
  ]

  const CURRENCIES = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Code',
      accessor: 'code'
    },
    {
      Header: 'Rate',
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
          setModalType={setModalType}
        />
      )
    },
  ]
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0  rounded-2xl'>
        <Navbar
          title={'Currencies'}
          type={'modal'}
          setModal={setModalType}
        />

        <Body columnData={CURRENCIES} />
      </div>

      {
        modalType &&
        <CurrencyModal
          open={modalType === 'add' || modalType === 'edit'}
          handleOnClose={() => setModalType(null)}
          type={modalType}
        />
      }
      <DeleteModal
        open={modalType === 'delete'}
        handleOnClose={() => setModalType(null)}
      />
    </div>
  )
}

export default Page