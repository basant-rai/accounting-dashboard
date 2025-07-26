'use client'

import ReportComponent from "@/components/@reports/ReportComponent"
import { DocumentIcon, ScaleIcon, TagIcon } from "@heroicons/react/24/solid"

const Page = () => {

  const IncomeExpenseReportList = [
    {
      title: "Expense Summary",
      key: "expense-summary",
      href: "/reports/income-expenses/expense-summary",
      Icon: TagIcon,
      desc: 'Monthly expense summary by category.'
    },
    {
      title: "Income Summary",
      key: "income-summary",
      href: "#",
      Icon: TagIcon,
      desc: 'Monthly income summary by category.'
    },
    {
      title: "Income vs Expense",
      key: "income-vs-expense",
      href: "#",
      Icon: TagIcon,
      desc: 'Monthly income vs expense by category.'
    },
  ]

  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <div className='p-4'>
          <h3 className=' font-bold text-2xl'>Income Expenses Report</h3>
          <p className='text-gray-500 text-sm'>Get an overview of your income and expenses.</p>
          <ReportComponent reports={IncomeExpenseReportList} />
        </div>
      </div>
    </div>
  )
}

export default Page