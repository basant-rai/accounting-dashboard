'use client'

import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className='px-8'>
        <h5 className='font-bold text-2xl'>Groups</h5>
        <p className='text-gray-500'>In the Groups section, you can manage your items that can be considered under the same group. You can select variants, add new items and manage their details from groups.</p>
        <div className="flex justify-center items-center h-full mt-32">
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='h-72 w-auto object-cover'
              src='/images/empty-item-groups.png'
              alt={"adjustments"}
            />
            <div>
              <h4 className="text-md py-2 text-gray-500">Looks like you don&apos;t have any group.</h4>
              <div className="py-4 space-x-4 text-center">
                <Link href='/inventory/groups/create' className='border border-primary-500 bg-primary-500 text-sm px-8 py-2 text-white rounded-lg'>
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
      <div className="w-full max-w-full px-8 flex-0 ">

        <div className='bg-white border-0  rounded-2xl'>
          {/* <Navbar
            link={'/inventory/groups/create'}
            title={'Groups'}
          /> */}

          {/* <GroupTable /> */}
        </div>
      </div>

    </div>
  )
}

export default Page