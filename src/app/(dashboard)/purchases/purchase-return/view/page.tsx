'use client'

import SalesPurchaseReturnView from "@/components/reusable/view/SalesPurchaseReturn/SalesPurchaseReturnView"


const Page = () => {
  return (
    <div>
      <div className='px-8 mt-2'>
        <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
          <SalesPurchaseReturnView  />
        </div>
      </div>
    </div>
  )
}

export default Page