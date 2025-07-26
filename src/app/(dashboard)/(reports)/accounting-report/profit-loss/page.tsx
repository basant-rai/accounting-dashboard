'use client'

import GeneralLedgerTable from "@/components/@reports/general-ledger/GeneralLedgerTable"
import BalanceSheetTable from "@/components/reusable/table/BalanceSheetTable"

const page = () => {
  const PROFIT_LOSS = [
    {
      Header: 'Dr',
      columns: [
        {
          Header: 'Particulars',
          accessor: 'name',
        },
        {
          Header: 'Amount',
          accessor: 'amount',
        },
      ],
    },
    {
      Header: 'Cr',
      columns: [
        {
          Header: 'Particulars',
          accessor: 'vendor',
        },
        {
          Header: 'Amount',
          accessor: 'code',
        },
      ],
    },
  ]

  return (
    <div>
      <div className="w-full max-w-full px-8 flex-0 ">
        <div className='bg-white border-0 rounded-2xl '>
          <h5 className="p-6 mb-0 font-bold text-2xl text-primary-500">Profit & Loss</h5>
          <BalanceSheetTable columnData={PROFIT_LOSS}/>
        </div>
      </div>
    </div>
  )
}

export default page