'use client'

import EntryForm from '@/components/@setting/double-entry/EntryForm'

const Page = () => {
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl'>
        <div className='p-4'>
          <h3 className=' font-bold text-2xl px-2'>Chart of Accounts
          </h3>
          <EntryForm />
        </div>
      </div>
    </div>
  )
}

export default Page