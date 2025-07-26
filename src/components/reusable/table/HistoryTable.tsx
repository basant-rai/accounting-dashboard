import React from 'react'
import ReactTable from './ReactTable'

const HistoryTable = () => {
  const Column_Data = [
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
    {
      Header: 'Description',
      accessor: 'due_date'
    },

  ]
  return (
    <div>
      <ReactTable columnData={Column_Data} />
    </div>
  )
}

export default HistoryTable