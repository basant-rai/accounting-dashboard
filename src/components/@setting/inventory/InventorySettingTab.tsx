'use client'

import { usePathname } from "next/navigation"
import { FunctionComponent } from "react"

const Tabs = [
  { name: 'Warehouse', key: 'warehouse' },
  { name: 'Barcode', key: 'barcode' },
  { name: 'Transfer Order', key: 'transfer-order' },
  { name: 'Adjustment', key: 'adjustment' },
  { name: 'Reason', key: 'reason' },
  { name: 'Unit', key: 'unit' }
]

interface Props {
  tabButton: 'warehouse' | 'barcode' | 'transfer-order' | 'adjustment',
  setTabButton: Function
}

const InventorySettingTab: FunctionComponent<Props> = ({ tabButton, setTabButton }) => {
  const pathname = usePathname();
  return (
    <div className="">
      <div className=' grid grid-cols-6 border border-primary-500 rounded-lg divide-x divide-primary-500 overflow-hidden '>
        {
          Tabs.map((tab, index) => (
            <button
              onClick={() => setTabButton(tab.key)}
              key={index}
              className={`${tabButton === tab.key ? 'bg-primary-500 text-white' : 'bg-white text-primary-500'} px-8 py-2.5 w-full text-md text-center`}
            >
              {tab.name}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default InventorySettingTab