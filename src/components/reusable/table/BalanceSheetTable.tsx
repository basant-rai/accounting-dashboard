'use client'

import React, { FunctionComponent, useMemo } from 'react'
import { useExpanded, useGroupBy, useRowSelect, useTable } from 'react-table'
import MOCK_DATA from "./MOCK_DATA.json"


interface Props {
  columnData: any
  rowsData?: any
}


const BalanceSheetTable: FunctionComponent<Props> = ({ columnData, rowsData }) => {
  const data = useMemo(() => MOCK_DATA, [])
  const columns = useMemo(() => columnData, [columnData])

  const tableInstance = useTable({ columns, data, }, useGroupBy, useExpanded,)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,

  } = tableInstance

  const firstPageRows = rows.slice(0, 100)


  return (
    <div>
      <table {...getTableProps()} className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50 divide-y border">
          {headerGroups.map(headerGroup => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                // eslint-disable-next-line react/jsx-key
                <th {...column.getHeaderProps()} className="px-4 py-3 border">
                  {column.canGroupBy ? (
                    // If the column can be grouped, let's add a toggle
                    <span {...column.getGroupByToggleProps()}>
                      {column.isGrouped}
                    </span>
                  ) : null}
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row: any, i: any) => {
            prepareRow(row)
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()} className="border">
                {row.cells.map((cell: any) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <td
                      {...cell.getCellProps()}
                      // style={{
                      //   background: cell.isGrouped
                      //     ? '#0aff0082'
                      //     : cell.isAggregated
                      //       ? '#ffa50078'
                      //       : cell.isPlaceholder
                      //         ? '#ff000042'
                      //         : 'white',
                      // }}
                      className="px-4 py-2 font-normal text-gray-900 border"
                    >
                      {cell.isAggregated
                        ? // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        cell.render('Aggregated')
                        : cell.isPlaceholder
                          ? null // For cells with repeated values, render null
                          : // Otherwise, just render the regular cell
                          cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default BalanceSheetTable