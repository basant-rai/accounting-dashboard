'use client'

import Body from "@/components/reusable/body/Body"
import Navbar from "@/layout/navbar/Navbar"

const Page = () => {

  const TRANSACTIONS = [
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Type',
      accessor: 'name'
    },
    {
      Header: 'Category',
      accessor: 'category'
    },
    {
      Header: 'Account',
      accessor: 'account'
    },
    {
      Header: 'Description',
      accessor: 'vendor'
    },

  ]

  return (
    <div>
      <div className="w-full max-w-full px-8 flex-0 ">
        <div className='bg-white border-0  rounded-2xl'>
          <Navbar
            link={'/banking/transfers/create'}
            title={'Transactions'}
            type={'link'}
          />

          <Body columnData={TRANSACTIONS} />

        </div>
      </div>
    </div>
  )
}

export default Page