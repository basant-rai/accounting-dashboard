'use client'

import VendorForm from "@/components/@purchase/vendor/VendorForm"

const Page = () => {
  return (
    <div className='px-8 mt-2'>
      <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">      
      <VendorForm />
      </div>
    </div>
  )
}

export default Page