import Link from 'next/link'
import React from 'react'

const NoWarehouseData = () => {
  return (
    <div>
      <div className='px-8'>
        <h5 className='font-bold text-2xl'>Warehouse</h5>
        <p className='text-gray-500'>In the Groups section, you can manage your items that can be considered under the same group. You can select variants, add new items and manage their details from groups.</p>
        <div className="flex justify-center items-center h-full mt-32">
          <div className="text-center">
            {/* <img
              className='h-72 w-auto object-cover'
              src='/images/empty-item-groups.png'
              alt={"adjustments"}
            /> */}
            <div>
              <h4 className="text-md py-2 text-gray-500">Looks like you don7apos;t have any group.</h4>
              <div className="py-4 space-x-4 text-center">
                <Link href='/inventory/warehouse/create' className='border border-primary-500 bg-primary-500 text-sm px-8 py-2 text-white rounded-lg'>
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

export default NoWarehouseData