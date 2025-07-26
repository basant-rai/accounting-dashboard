'use client'

import ReportSearch from '@/components/reusable/search/ReportSearch'
import React from 'react'

const page = () => {
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl '>
        <h5 className="p-6 mb-0 font-bold text-2xl text-primary-500">Tax Summary</h5>
        <div className='px-1 mx-6 space-y-4 pb-4'>
          <ReportSearch />

          <div className='border-b border-primary-500 pb-2'>
            <p className='font-bold text-xl py-1 border-b'>Baisakh</p>
            <div className='grid grid-cols-2 divide-x py-2'>
              <div className='px-2'>
                <h5 className='font-bold text-primary-500 text-lg py-2'>Purchase</h5>
                <div className='px-2 border-b pb-2'>
                  <div className='grid grid-cols-5'>
                    <div className='col-span-4'>
                      Purchase
                    </div>
                    <div>
                      10000
                    </div>
                  </div>
                  <div className='grid grid-cols-5'>
                    <div className='col-span-4'>
                      Purchase
                    </div>
                    <div>
                      10000
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-4 font-bold text-lg'>
                    Total
                  </div>
                  <div className='font-bold'>
                    10000
                  </div>
                </div>
              </div>
              <div className='px-2'>
                <h5 className='font-bold text-primary-500 text-lg py-2'>Sales</h5>
                <div className='px-2 border-b pb-2'>
                  <div className='grid grid-cols-5'>
                    <div className='col-span-4'>
                      Vat on
                    </div>
                    <div>
                      10000
                    </div>
                  </div>
                  <div className='grid grid-cols-5'>
                    <div className='col-span-4'>
                      Vat on
                    </div>
                    <div>
                      10000
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-4 font-bold text-lg'>
                    Total
                  </div>
                  <div className='font-bold'>
                    10000
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 p-2 justify-items-center'>
              <div className=''>
                <p className='text-xl font-bold'>Total</p>
              </div>
              <div className='col-span-1'>
                <div className='font-bold'>₨2,500.00</div>
              </div>
            </div>
          </div>

          <div className='border-b border-primary-500 pb-2'>
            <p className='font-bold text-xl py-1 border-b'>Jestha</p>
            <div className='grid grid-cols-2 divide-x py-2'>
              <div className='px-2'>
                <h5 className='font-bold text-primary-500 text-lg py-2'>Purchase</h5>
                <div className='px-2 border-b pb-2'>
                  <div className='grid grid-cols-5'>
                    <div className='col-span-4'>
                      Purchase
                    </div>
                    <div>
                      10000
                    </div>
                  </div>
                  <div className='grid grid-cols-5'>
                    <div className='col-span-4'>
                      Purchase
                    </div>
                    <div>
                      10000
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-4 font-bold text-lg'>
                    Total
                  </div>
                  <div className='font-bold'>
                    10000
                  </div>
                </div>
              </div>
              <div className='px-2'>
                <h5 className='font-bold text-primary-500 text-lg py-2'>Sales</h5>
                <div className='px-2 border-b pb-2'>
                  <div className='grid grid-cols-5'>
                    <div className='col-span-4'>
                      Vat on
                    </div>
                    <div>
                      10000
                    </div>
                  </div>
                  <div className='grid grid-cols-5'>
                    <div className='col-span-4'>
                      Vat on
                    </div>
                    <div>
                      10000
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-4 font-bold text-lg'>
                    Total
                  </div>
                  <div className='font-bold'>
                    10000
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 p-2 justify-items-center'>
              <div className=''>
                <p className='text-xl font-bold'>Total</p>
              </div>
              <div className='col-span-1'>
                <div className='font-bold'>₨2,500.00</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page