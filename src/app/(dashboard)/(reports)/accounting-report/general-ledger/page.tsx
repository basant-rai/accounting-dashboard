'use client'

import GeneralLedgerTable from "@/components/@reports/general-ledger/GeneralLedgerTable"
import ReportSearch from "@/components/reusable/search/ReportSearch"

const page = () => {

  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl '>
        <h5 className="p-6 mb-0 font-bold text-2xl text-primary-500">General Ledger</h5>
        <div className="px-6">
          {/* <ReactTable columnData={GENERALLEDGER} /> */}
          <ReportSearch  />
          <GeneralLedgerTable />
        </div>
      </div>
    </div>
  )
}

export default page