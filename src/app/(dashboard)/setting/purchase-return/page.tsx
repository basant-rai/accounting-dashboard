'use client'

import PurchaseForm from '@/components/@setting/purchase-return/PurchaseForm'

const Page = () => {
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <div className='p-4'>
          <h3 className=' font-bold text-2xl px-2'>Purchase Return</h3>
          <PurchaseForm />
        </div>
      </div>
    </div>
  )
}

export default Page