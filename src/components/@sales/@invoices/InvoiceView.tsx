'use client'

import Total from "@/components/reusable/CalculationTotal/Total"
import CreditTransactionDisclosure from "@/components/reusable/Disclosure/CreditTransactionDisclousre"
import HistoryDisclosure from "@/components/reusable/Disclosure/HistoryDisclosure"
import JournalDisclosure from "@/components/reusable/Disclosure/JournalDisclosure"
import TransactionDisclosure from "@/components/reusable/Disclosure/TransactionDisclosure"
import ReactTable from "@/components/reusable/table/ReactTable"

const InvoiceView = () => {

  const Column_Data = [
    {
      Header: 'Items',
      accessor: 'date'
    },
    {
      Header: 'Quantity',
      accessor: 'vendor'
    },
    {
      Header: 'Price',
      accessor: 'due_date'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
  ]

  return (
    <div className="px-4">
      <h6 className="font-bold text-primary-500 p-2 text-2xl">Invoice</h6>
      <div className="mt-5">
        <div className="grid grid-cols-2 mt-4">
          <div className="flex-shrink-0 rounded-full h-24 w-24 bg-primary-500">
          </div>
          <div>
            <h6 className="font-bold">Lotussoft</h6>
            <p className="text-sm">Kupondole, Lalitpur, Nepal</p>
            <p className="text-sm">Tax Number: 605692538</p>
            <p className="text-sm">9857241039</p>
            <p className="text-sm">abce@info.com</p>
          </div>

        </div>
        <div className="grid grid-cols-2 px-4 mt-5 py-4 border-t" >
          <div>
            <h6>Bill To:</h6>
            <p>HAFIJOR HAFIJOR RAHAMAN ANSARI</p>
            <p>Parswa, Nepal</p>
          </div>
          <div className="">
            <div className="px-2 border-r">
              <div className="grid grid-cols-1 sm:grid-cols-2 py-1">
                <div className="font-bold text-primary-500">Invoice Number:</div>
                <div className="text-gray-600 text-sm">123456789</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 py-1">
                <div className="font-bold text-primary-500">Invoice Date:</div>
                <div className="text-gray-600 text-sm">06 Feb 2023</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 py-1">
                <div className="font-bold text-primary-500">Due Date:</div>
                <div className="text-gray-600 text-sm">06 Feb 2023</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <ReactTable columnData={Column_Data} />
      <Total />
      <div className="grid grid-cols-2 mt-8">
        <HistoryDisclosure />
        <TransactionDisclosure />
        <CreditTransactionDisclosure />
        <JournalDisclosure />
      </div>
    </div>
  )
}

export default InvoiceView