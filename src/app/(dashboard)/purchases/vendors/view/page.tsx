'use client'

import CustomerVendorView from "@/components/reusable/view/Customer&vendor/CustomerVendorView"


const Page = () => {
  return (
    <div>
      <div className='px-8 mt-2'>
        <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
          <CustomerVendorView type={'purchase'} />
        </div>
      </div>
    </div>
  )
}

export default Page