'use client'

import React, { FunctionComponent, useState } from "react"
import Goback from "../../Button/Goback"
import { MoreActionDropDown } from "../../Button/MoreActionDropDown"
import { Button } from "../../Button/button"
import ReactTable from "@/components/reusable/table/ReactTable"

type IType = 'bill' | 'transaction' | 'credit'

interface Props {
  type: 'sale' | 'purchase'
}

const CustomerVendorView: FunctionComponent<Props> = ({ type }) => {

  const [btnType, setBtnType] = useState<IType>('bill')

  const Bills_data = [
    {
      Header: 'Number',
      accessor: 'date'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Invoice date',
      accessor: 'vendor'
    },
    {
      Header: 'Due date',
      accessor: 'due_date'
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
  ]

  const Transaction_data = [
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Category',
      accessor: 'status'
    },
    {
      Header: 'Account',
      accessor: 'due_date'
    },

  ]

  const Credit_data = [
    {
      Header: 'Number',
      accessor: 'date'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Category',
      accessor: 'status'
    },
    {
      Header: 'Account',
      accessor: 'due_date'
    },

  ]

  return (
    <>
      <div className="flex flex-wrap items-center justify-between ">
        <div className='inline-flex items-center'>
          <div>
            <Goback />
          </div>
          <div className="font-bold text-xl ml-2">Balaji Technology Pvt. Ltd</div>
        </div>
        <div className="inline-flex flex-wrap items-center space-x-2">
          <MoreActionDropDown />
          <div>
            <Button htmlType={'button'} type={'optional'} border={'primary'}>Add</Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-5 gap-4">
        <div className="col-span-1">
          <div className="space-y-2">
            <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border flex justify-between items-center">
              {type === 'sale' && <span>Invoices</span>}
              {type === 'purchase' && <span>Bills</span>}
              <span className="text-sm">0</span>
            </div>
            <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border flex justify-between items-center">
              Transactions
              <span className="text-sm">0</span>
            </div>
            {
              type === 'sale' &&
              <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border flex justify-between items-center">
                Credit Notes
                <span className="text-sm">0</span>
              </div>
            }
          </div>
          <div className="bg-white shadow-lg shadow-gray-200 rounded-xl mt-4 p-4 border divide-y">
            <div className="grid grid-cols-2 p-2">
              <div className="text-md text-primary-500  ">Email:</div>
              <p className="text-sm text-gray-500 ">Emal@asew.com</p>
            </div>
            <div className="grid grid-cols-2 p-2">
              <div className="text-md text-primary-500  ">Phone:</div>
              <p className="text-sm text-gray-500 ">123456789</p>
            </div>
            <div className="grid grid-cols-2 p-2">
              <div className="text-md text-primary-500  ">Website:</div>
              <p className="text-sm text-gray-500 ">www.wwwwwww.ww</p>
            </div>
            <div className="grid grid-cols-2 p-2">
              <div className="text-md text-primary-500  ">Tax Number:</div>
              <p className="text-sm text-gray-500 ">000012345986</p>
            </div>
            <div className="grid grid-cols-2 p-2">
              <div className="text-md text-primary-500  ">Address:</div>
              <p className="text-sm text-gray-500 ">lomsndi</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border">
              <h6>Paid</h6>
              <p className="capitalize font-bold text-md text-primary-500">Rs.18,016.00</p>
            </div>
            <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border">
              <h6>Open bills</h6>
              <p className="capitalize font-bold text-md text-primary-500">Rs.1,150.00</p>
            </div>
            <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border">
              <h6>Overdue bills</h6>
              <p className="capitalize font-bold text-md text-primary-500">06 Feb 2023</p>
            </div>

          </div>
          <div className="mt-4">
            <div className='flex gap-4 px-3 py-2'>
              <button
                className={`${btnType === 'bill' ? 'bg-primary-500 text-white' : 'bg-white border border-primary-500 text-primary-500'} w-full px-8 py-2 rounded-lg  text-sm`}
                onClick={() => setBtnType('bill')}
              >
                {type === 'purchase' && <span>Bills</span>}
                {type === 'sale' && <span>Invoices</span>}

              </button>
              <button
                className={`${btnType === 'transaction' ? 'bg-primary-500 text-white' : 'bg-white border border-primary-500 text-primary-500'} w-full px-8 py-2 rounded-lg  text-sm`}
                onClick={() => setBtnType('transaction')}>
                Transactions
              </button>
              {
                type === 'sale' &&
                <button
                  className={`${btnType === 'credit' ? 'bg-primary-500 text-white' : 'bg-white border border-primary-500 text-primary-500'} w-full px-8 py-2 rounded-lg  text-sm`}
                  onClick={() => setBtnType('credit')}>
                  Credit
                </button>
              }
            </div>
            <div>
              {
                btnType === 'bill' &&
                <ReactTable columnData={Bills_data} />
              }
              {
                btnType === 'transaction' &&
                <ReactTable columnData={Transaction_data} />
              }
              {
                btnType === 'credit' &&
                <ReactTable columnData={Credit_data} />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerVendorView