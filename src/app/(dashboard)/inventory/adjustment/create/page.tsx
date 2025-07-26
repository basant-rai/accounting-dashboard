'use client'

import AdjustmentForm from '@/components/@inventory/@adjustment/AdjustmentForm';
import Goback from '@/components/reusable/Button/Goback';
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className='px-8 mt-2'>
        <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
          <div className='inline-flex items-center'>
            <Goback />
            <div className="my-2 font-bold px-3 ">
              Add new adjustment
            </div>
          </div>
          <AdjustmentForm />
        </div>
      </div>
    </div>
  )
}

export default Page