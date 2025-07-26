'use client'

import Link from "next/link"

const Page = () => {
  return (
    <div>
      <div className='px-8'>
        <h5 className='font-bold text-2xl'>Transfer Orders</h5>
        <p className='text-gray-500'>Transfer order allows you to keep track of item movement one warehouse to another.</p>
        <div className="flex justify-center items-center h-full mt-32">
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='h-72 w-72 object-cover'
              src='/images/empty-transfer-orders.png'
              alt={""}
            />
            <div>
              <h4 className="text-lg py-2 text-gray-500">Looks like you don&apos;t have any transfer orders.</h4>
              <div className="py-4 space-x-4 text-center">
                <Link href='/inventory/transfer-orders/create' className='border border-primary-500 bg-primary-500 text-sm px-8 py-2 text-white rounded-lg'>
                  Create
                </Link>
                <Link href='#' className='border border-primary-500 text-sm px-8 py-2 text-primary-500 rounded-lg'>
                  Import
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
