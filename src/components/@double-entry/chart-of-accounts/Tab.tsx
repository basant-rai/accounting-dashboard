'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"


const Tabs = [
  { name: 'Assests', key: 'assests', href: '/double-entry/chart-of-accounts/assets' },
  { name: 'Liabilities', key: 'liabilities', href: '/double-entry/chart-of-accounts/liabilities' },
  { name: 'Expenses', key: 'expenses', href: '/double-entry/chart-of-accounts/expenses' },
  { name: 'Income', key: 'income', href: '/double-entry/chart-of-accounts/income' },
  { name: 'Equity', key: 'equity', href: '/double-entry/chart-of-accounts/equity' }
]

const DoubleEntryTab = () => {
  const pathname = usePathname();
  return (
    <div className="">
      <div className=' grid grid-cols-5 border mx-4 border-primary-500 rounded-lg divide-x divide-primary-500  overflow-hidden 2xl:w-1/2'>
        {
          Tabs.map((tab, index) => (
            <Link href={tab.href}
              key={index}
              className={`${pathname === tab.href ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'} px-8 py-2 w-full text-sm text-center`}
            >
              {tab.name}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default DoubleEntryTab