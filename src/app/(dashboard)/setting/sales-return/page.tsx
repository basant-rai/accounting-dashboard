'use client'

import SalesForm from '@/components/@setting/sales-return/SalesForm'

const Page = () => {
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <div className='p-4'>
          <h3 className=' font-bold text-2xl px-2'>Sales Return</h3>
          <SalesForm />
        </div>
      </div>
    </div>
  )
}

export default Page