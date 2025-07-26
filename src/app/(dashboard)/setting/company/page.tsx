'use client'

import CompanyForm from '@/components/@setting/company/CompanyForm'

const Page = () => {
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <div className='p-4'>
          <h3 className=' font-bold text-2xl'>Company</h3>
          <p className='text-gray-500 text-sm'>This information is visible in the records you create.</p>
          <CompanyForm />
        </div>
      </div>
    </div>
  )
}

export default Page