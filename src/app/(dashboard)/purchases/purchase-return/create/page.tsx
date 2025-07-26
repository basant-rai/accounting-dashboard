'use client'

import PurchaseReturnForm from "@/components/@purchase/purchase-return/PurchaseReturnForm"

const Page = () => {
  return (
    <div className='px-8 mt-2'>
      <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">      
      <PurchaseReturnForm />
      </div>
    </div>
  )
}

export default Page