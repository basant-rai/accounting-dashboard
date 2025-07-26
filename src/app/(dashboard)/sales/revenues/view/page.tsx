'use client'

import ViewTable from "@/components/@purchase/payments/ViewTable"
import Goback from "@/components/reusable/Button/Goback"
import { MoreActionDropDown } from "@/components/reusable/Button/MoreActionDropDown"
import { Button } from "@/components/reusable/Button/button"

const Page = () => {
  return (
    <div className='px-8 mt-2'>
      <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
        <div className="flex flex-wrap items-center justify-between ">
          <div className='inline-flex items-center'>
            <div>
              <Goback />
            </div>
            <div className="font-bold text-xl ml-2">Revenue Received</div>
          </div>
          <div className="inline-flex flex-wrap items-center space-x-2">
            <MoreActionDropDown />
            <div>
              <Button htmlType={'button'} type={'optional'} border={'primary'}>Add</Button>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-5">
          <div className="bg-white shadow-xl rounded-xl p-4 border">
            <h6 className="text-lg">Account</h6>
            <p className="uppercase font-bold text-md text-primary-500">ABLL ACCC</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-4 border">
            <h6>Category</h6>
            <p className="capitalize font-bold text-md text-primary-500">Purchase</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-4 border">
            <h6>Vendor</h6>
            <p className="capitalize font-bold text-md text-primary-500">ABC Company ltd</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-4 border">
            <h6>Amount</h6>
            <p className="capitalize font-bold text-md text-primary-500">Rs.500000</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-4 border">
            <h6>Date</h6>
            <p className="capitalize font-bold text-md text-primary-500">feb-16, 2021</p>
          </div>
        </div>
        <div className="mt-8 px-4">
          <div className="flex flex-wrap md:w-1/2 mr-auto space-x-8">
            <div className="flex-shrink-0 rounded-full h-24 w-24 bg-primary-500">
            </div>
            <div>
              <h6 className="font-bold">Lotussoft</h6>
              <p className="text-sm">Kupondole, Lalitpur, Nepal</p>
              <p className="text-sm">Tax Number: 605692538</p>
              <p className="text-sm">9857241039</p>
              <p className="text-sm">abce@info.com</p>
            </div>

          </div>
        </div>
        <div className="mt-8 border-t py-4">
          <h5 className="font-bold text-lg text-center uppercase">Revenue Received</h5>
          <div className="grid grid-cols-1 lg:grid-cols-5 px-4 gap-8">
            <div className="lg:col-span-4 divide-y space-y-2 px-2 border-r">
              <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
                <div className="col-span-1 font-bold text-primary-500">Number:</div>
                <div className="col-span-4 text-gray-600 text-sm">123456789</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
                <div className="col-span-1 font-bold text-primary-500">Date:</div>
                <div className="col-span-4 text-gray-600 text-sm">06 Feb 2024</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
                <div className="col-span-1 font-bold text-primary-500">Basis:</div>
                <div className="col-span-4 text-gray-600 text-sm">123456789</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
                <div className="col-span-1 font-bold text-primary-500">Account:</div>
                <div className="col-span-4 text-gray-600 text-sm">ABCDE BANK</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
                <div className="col-span-1 font-bold text-primary-500">Category:</div>
                <div className="col-span-4 text-gray-600 text-sm">Purchase</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 py-1">
                <div className="col-span-1 font-bold text-primary-500">Payment Method:</div>
                <div className="col-span-4 text-gray-600 text-sm">Bank Transfer</div>
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
        </div>
        <div className="mt-4 px-4">
          <h6 className="font-bold text-lg p-2 text-primary-500">Related Bill</h6>
          <ViewTable />
        </div>


      </div>
    </div>
  )
}

export default Page