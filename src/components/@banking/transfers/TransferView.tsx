'use client'

import Goback from "@/components/reusable/Button/Goback"
import { MoreActionDropDown } from "@/components/reusable/Button/MoreActionDropDown"
import { Button } from "@/components/reusable/Button/button"
import HistoryDisclosure from "@/components/reusable/Disclosure/HistoryDisclosure"

const TransferView = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between ">
        <div className='inline-flex items-center'>
          <div>
            <Goback />
          </div>
          <div className="font-bold text-xl ml-2">Transfer</div>
        </div>
        <div className="inline-flex flex-wrap items-center space-x-2">
          <MoreActionDropDown />
          <div>
            <Button htmlType={'button'} type={'optional'} border={'primary'}>Add</Button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
          <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border">
            <h6>From Account</h6>
            <p className="capitalize font-bold text-md text-primary-500">Cash In Hand</p>
          </div>
          <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border">
            <h6>To Account</h6>
            <p className="capitalize font-bold text-md text-primary-500">NBL CURRENT AC</p>
          </div>
          <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border">
            <h6>Amount</h6>
            <p className="capitalize font-bold text-md text-primary-500">₨25,500.00</p>
          </div>
          <div className="bg-white shadow-lg shadow-gray-200 rounded-xl p-4 border">
            <h6>Date</h6>
            <p className="capitalize font-bold text-md text-primary-500">06 Feb 2023</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t py-4">
        <h5 className="font-bold text-lg text-center uppercase"> Details</h5>
        <div className="grid grid-cols-1 lg:grid-cols-5 px-4 gap-8">
          <div className="lg:col-span-4 divide-y space-y-2 px-2 border-r">
            <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
              <div className="col-span-1 font-bold text-primary-500">Date:</div>
              <div className="col-span-4 text-gray-600 text-sm">06 Feb 2023</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
              <div className="col-span-1 font-bold text-primary-500">Payment Method:</div>
              <div className="col-span-4 text-gray-600 text-sm">Cash</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
              <div className="col-span-1 font-bold text-primary-500">Reference:</div>
              <div className="col-span-4 text-gray-600 text-sm">123456789</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
              <div className="col-span-1 font-bold text-primary-500">Description:</div>
              <div className="col-span-4 text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
            </div>
          </div>
          <div className="md:text-center my-auto">
            <div className="font-bold text-xl">Amount</div>
            <p className="font-bold text-3xl">Rs. 10000000</p>
          </div>
        </div>
        <div className="grid grid-cols-2 px-4 mt-4 pt-4 border-t">
          <div className="px-2">
            <h6 className="text-lg font-bold text-primary-500">From Account</h6>
            <p className="text-gray-500">Cash In hand</p>
            <p className="text-gray-500">Number:1</p>
            <p className="text-gray-500">Cash</p>
          </div>
          <div>
            <h6 className="text-lg font-bold text-primary-500">To Account</h6>
            <p className="text-gray-500 uppercase text-sm">nbl current ac</p>
            <p className="text-gray-500 uppercase text-sm">Nepal bank limited</p>
            <p className="text-gray-500 uppercase text-sm">jeetpur simara-t, BarA</p>
          </div>
        </div>
        <div className="md:w-1/2 mt-4">
          <HistoryDisclosure/>
        </div>
      </div>
    </div>
  )
}

export default TransferView