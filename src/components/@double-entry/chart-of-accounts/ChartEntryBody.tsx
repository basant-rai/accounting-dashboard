import React, { FunctionComponent } from 'react'
import DoubleEntryTab from './Tab'
import ReactTable from '@/components/reusable/table/ReactTable'

interface Props {
  columnData: any
  title:string
}

const ChartEntryBody: FunctionComponent<Props> = ({ columnData,title }) => {
  return (
    <div>
      <div className=" px-2 py-3 sm:py-5">
        <div>
          <DoubleEntryTab />
        </div>
        <h5 className="font-bold text-2xl text-gray-700 px-4 mt-2 capitalize">{title}</h5>

        <div className="px-4 py-3">
          <input
            className="py-2 px-2 border rounded-lg" placeholder="Search..."
            type="text"
          />
        </div>

        <div className="p-2">
          <ReactTable columnData={columnData} rowsData={[]} />
        </div>
      </div>
    </div>
  )
}

export default ChartEntryBody