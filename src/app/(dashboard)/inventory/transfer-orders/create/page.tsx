'use client'

import TransferOrderForm from '@/components/@inventory/@transfer-orders/TransferOrderForm';
import Goback from '@/components/reusable/Button/Goback';
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className='px-8 mt-2'>
        <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
          <div className='inline-flex items-center'>
            <Goback />
            <h5 className="my-2 font-bold px-3 ">
              Add new transfer-order
            </h5>
          </div>
          <TransferOrderForm />
        </div>
      </div>
    </div>
  )
}

export default Page