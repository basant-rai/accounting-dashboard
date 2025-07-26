'use client'

import { MoreActionDropDown } from "../../Button/MoreActionDropDown"
import Goback from "../../Button/Goback"
import { Button } from "../../Button/button"
import { ShareIcon } from "@heroicons/react/24/solid"
import InvoiceView from "@/components/@sales/@invoices/InvoiceView"

const SalesPurchaseReturnView = () => {

  const Column_Data = [
    {
      Header: 'Items',
      accessor: 'date'
    },
    {
      Header: 'Quantity',
      accessor: 'vendor'
    },
    {
      Header: 'Price',
      accessor: 'due_date'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
  ]

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between ">
        <div className='inline-flex items-center'>
          <div>
            <Goback />
          </div>
          <div className="font-bold text-xl ml-2">Debit Note: DN-0000000001</div>
        </div>
        <div className="inline-flex flex-wrap items-center space-x-2">
          <MoreActionDropDown />
          <div>
            <Button htmlType={'button'} type={'optional'} border={'primary'}>Add</Button>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        <div className="bg-white shadow-xl rounded-xl p-4 border">
          <h6 className="text-lg">Status</h6>
          <p className="uppercase font-bold text-md text-primary-500">Draft</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-4 border">
          <h6>Customer</h6>
          <p className="capitalize font-bold text-md text-primary-500">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-4 border">
          <h6>Amount due</h6>
          <p className="capitalize font-bold text-md text-primary-500">Rs.1,150.00</p>
        </div>
      </div>

      <div className="mt-8">
        <ol className="relative border-l border-gray-200 mt-10 ml-5">
          <li className="mb-10 ml-8">
            <div className="absolute w-5 h-5 bg-gray-200 rounded-full -left-2.5 border border-white "></div>
            <h3 className="text-lg font-semibold text-gray-900 ">Create Purchase Return</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Status: Created on 09 Apr 2023
            </p>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Edit
              <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </li>
          <li className="mb-10 ml-8">
            <div className="absolute w-5 h-5 bg-gray-200 rounded-full -left-2.5 border border-white "></div>
            <h3 className="text-lg font-semibold text-gray-900 ">Send Purchase Return</h3>
            <p className="mb-4 text-base font-normal text-gray-500">Status: Not sent
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:items-center">
              <Button htmlType={'button'} type={'white'} >Mark sent</Button>
              <Button htmlType={'button'}>Send email</Button>
              <button >
                <ShareIcon className="h-5 w-5" />
              </button>
            </div>
          </li>
        </ol>
        <div className="border-t">
          <InvoiceView />
        </div>
      </div>
    </div>
  )
}

export default SalesPurchaseReturnView