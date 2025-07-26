'use client'

import React, { FunctionComponent, useMemo } from "react"
import MOCK_DATA from "./MOCK_DATA.json"

import { useRowSelect, useTable } from 'react-table'

interface Props {
  columnData: any
  rowsData?: any
}

const ReactTable: FunctionComponent<Props> = ({ columnData, rowsData }) => {

  const data = useMemo(() => MOCK_DATA, [])
  const columns = useMemo(() => columnData, [columnData])

  // eslint-disable-next-line react/display-name
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }: any, ref: any) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])

      return (
        <>
          <input
            type="checkbox"
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600" ref={resolvedRef} {...rest}
          />
        </>
      )
    }
  )

  const tableInstance = useTable({
    columns, data,

  },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',

          Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }: any) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,

  } = tableInstance

  return (
    <div className="">
      <div className="overflow-x-aut">
        <table
          className="w-full text-sm text-left text-gray-500"
          {...getTableProps()}>
          <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            {
              headerGroups.map((headerGroup, index) => (
                // eslint-disable-next-line react/jsx-key
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()} className="px-4 py-3"
                        key={column.id}
                      >
                        {column.render('Header')}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody>
            {
              rows.map((row, i) => {
                prepareRow(row)
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr {...row.getRowProps()} className="border-b">
                    {row.cells.map((cell) => {
                      // eslint-disable-next-line react/jsx-key
                      return <td {...cell.getCellProps()}
                        className="px-4 py-2 font-normal text-gray-900 ">
                        <span>{cell.render('Cell')}</span>
                      </td>
                    })}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReactTable