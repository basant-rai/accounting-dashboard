'use client'

import SalesReturnForm from "@/components/@sales/@sales-return/SalesReturnForm"


const Page = () => {
  return (
    <div className='px-8 mt-2'>
      <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
        <SalesReturnForm />
      </div>
    </div>
  )
}

export default Page