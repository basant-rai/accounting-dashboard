import React, { FunctionComponent } from 'react'
import ReactTable from '../table/ReactTable'
import Pagination from '../Pagination/pagination'

interface Props {
  columnData: any
}

const Body: FunctionComponent<Props> = ({ columnData }) => {
  return (
    <div>
      <section className=" py-3 sm:py-5">
        <div className="px-4 py-3">
          <input
            className="py-2 px-2 border rounded-lg" placeholder="Search..."
            type="text"
          />
        </div>
        <ReactTable columnData={columnData} rowsData={[]} />
        <Pagination />

      </section>
    </div>
  )
}

export default Body