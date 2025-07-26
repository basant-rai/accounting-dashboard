'use client'

import ReportComponent from "@/components/@reports/ReportComponent"
import { ScaleIcon, TagIcon } from "@heroicons/react/24/solid"

const Page = () => {

  const InventoryReportList = [
    {
      title: "Item Summary",
      key: "item-summary",
      href: "/reports/item-summary/balance-sheet",
      Icon: ScaleIcon,
      desc: 'The list of the Item Information'
    },
    {
      title: "Purchase Summary",
      key: "purchase-summary",
      href: "#",
      Icon: TagIcon,
      desc: 'Stock tracking of purchases items'
    },
    {
      title: "Sale Summary",
      key: "sale-summary",
      href: "#",
      Icon: TagIcon,
      desc: 'Stock tracking of sales items'
    },
    {
      title: "Stock Status",
      key: "stock-status",
      href: "#",
      Icon: TagIcon,
      desc: 'Stock tracking of items'
    },
  ]
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <div className='p-4'>
          <h3 className=' font-bold text-2xl'>Inventory Report</h3>
          <p className='text-gray-500 text-sm'>Get a clear picture of how your business is doing.</p>
          <ReportComponent reports={InventoryReportList} />
        </div>
      </div>
    </div>
  )
}

export default Page