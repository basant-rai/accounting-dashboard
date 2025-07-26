'use client'

import ReportComponent from "@/components/@reports/ReportComponent"
import { DocumentIcon, ScaleIcon, TagIcon } from "@heroicons/react/24/solid"

const Page = () => {

  const AccountReportList = [
    {
      title: "Balance Sheet",
      key: "balance-sheet",
      href: "/reports/accounting/balance-sheet",
      Icon: ScaleIcon,
      desc: 'Snapshot of your business.'
    },
    {
      title: "General Ledger",
      key: "general-ledger",
      href: "#",
      Icon: DocumentIcon,
      desc: 'Detailed list of all transactions and their total.'
    },
    {
      title: "Journal Entries",
      key: "journal-entries",
      href: "#",
      Icon: TagIcon,
      desc: 'Detailed list of all journal entries.'
    },
    {
      title: "Profit & Loss",
      key: "profit-loss",
      href: "/reports/accounting/balance-sheet",
      Icon: TagIcon,
      desc: 'Quarterly profit & loss by category.'
    },
    {
      title: "Profit & Loss(Inventory)",
      key: "profit-loss-inventory",
      href: "#",
      Icon: TagIcon,
      desc: 'Quarterly profit & loss by inventory.'
    },
    {
      title: "Tax Summary",
      key: "tax-summary",
      href: "#",
      Icon: TagIcon,
      desc: 'Quarterly tax summary.'
    },
    {
      title: "Trial Balance",
      key: "trial-balance",
      href: "#",
      Icon: TagIcon,
      desc: 'Balance of all your chart of accounts.'
    },
  ]

  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <div className='p-4'>
          <h3 className=' font-bold text-2xl'>Accounting Report</h3>
          <p className='text-gray-500 text-sm'>Get a clear picture of how your business is doing.</p>
          <ReportComponent reports={AccountReportList} />
        </div>
      </div>
    </div>
  )
}

export default Page