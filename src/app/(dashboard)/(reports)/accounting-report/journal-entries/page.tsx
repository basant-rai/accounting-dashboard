'use client'

import ReportSearch from '@/components/reusable/search/ReportSearch'
import Search from '@/components/reusable/search/Search'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="w-full max-w-full px-8 flex-0 ">
        <div className='bg-white border-0 rounded-2xl '>
          <h5 className="p-6 mb-0 font-bold text-2xl text-primary-500">Journal Entries</h5>

          <div className='px-1 mx-6 space-y-4 pb-4'>
            <ReportSearch />
            <div className='border-b border-primary-500 pb-2'>
              <div className='grid grid-cols-5'>
                <div className='col-span-3'>
                  <p className='font-bold text-xl'>06 Feb 2023 - #8</p>
                </div>
                {/* <div className='col-span-2'>
                  <p>Description</p>
                </div> */}
                <div className='col-span-1'>
                  <div className='font-bold text-xl'>Debit</div>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold text-xl'>Credit</div>
                </div>
              </div>
              <div className='p-2 space-y-2 border-b border-t'>
                <div className='grid grid-cols-5'>
                  <div className='col-span-1'>
                    <p className='text-sm text-gray-700'>NBL CURENT AC</p>
                  </div>
                  <div className='col-span-2'>
                    <p className='text-xs text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>Rs2,500.00</div>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>₨0.00</div>
                  </div>
                </div>
                <div className='grid grid-cols-5'>
                  <div className='col-span-1'>
                    <p className='text-sm text-gray-700'>NBL CURENT AC</p>
                  </div>
                  <div className='col-span-2'>
                    <p className='text-xs text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>Rs2,500.00</div>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>₨0.00</div>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-5 py-2'>
                <div className='col-span-3'>
                  <p className='text-xl font-bold'>Total</p>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold'>₨2,500.00</div>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold'>₨2,500.00</div>
                </div>
              </div>
            </div>
            <div className='border-b border-primary-500 pb-2'>
              <div className='grid grid-cols-5'>
                <div className='col-span-3'>
                  <p className='font-bold text-xl'>06 Feb 2023 - #8</p>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold text-xl'>Debit</div>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold text-xl'>Credit</div>
                </div>
              </div>
              <div className='p-2 space-y-2 border-b border-t'>
                <div className='grid grid-cols-5'>
                  <div className='col-span-3'>
                    <p className='text-sm text-gray-700'>NBL CURENT AC</p>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>Rs2,500.00</div>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>₨0.00</div>
                  </div>
                </div>
                <div className='grid grid-cols-5'>
                  <div className='col-span-3'>
                    <p className='text-sm text-gray-700'>NBL CURENT AC</p>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>Rs2,500.00</div>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>₨0.00</div>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-5 py-2'>
                <div className='col-span-3'>
                  <p className='text-xl font-bold'>Total</p>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold'>₨2,500.00</div>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold'>₨2,500.00</div>
                </div>
              </div>
            </div>
            <div className='border-b border-primary-500 pb-2'>
              <div className='grid grid-cols-5'>
                <div className='col-span-3'>
                  <p className='font-bold text-xl'>06 Feb 2023 - #8</p>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold text-xl'>Debit</div>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold text-xl'>Credit</div>
                </div>
              </div>
              <div className='p-2 space-y-2 border-b border-t'>
                <div className='grid grid-cols-5'>
                  <div className='col-span-3'>
                    <p className='text-sm text-gray-700'>NBL CURENT AC</p>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>Rs2,500.00</div>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>₨0.00</div>
                  </div>
                </div>
                <div className='grid grid-cols-5'>
                  <div className='col-span-3'>
                    <p className='text-sm text-gray-700'>NBL CURENT AC</p>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>Rs2,500.00</div>
                  </div>
                  <div className='col-span-1'>
                    <div className='text-sm'>₨0.00</div>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-5 py-2'>
                <div className='col-span-3'>
                  <p className='text-xl font-bold'>Total</p>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold'>₨2,500.00</div>
                </div>
                <div className='col-span-1'>
                  <div className='font-bold'>₨2,500.00</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page