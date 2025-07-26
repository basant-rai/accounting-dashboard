'use client'

import ReportSearch from '@/components/reusable/search/ReportSearch'
import React from 'react'

const page = () => {
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl '>
        <h5 className="p-6 mb-0 font-bold text-2xl text-primary-500">Trial Balance</h5>
        <div className='px-1 mx-6 space-y-4 pb-4'>
          <ReportSearch />
          <div className='px-1 border-l'>
            {/* header */}
            <div className='grid grid-cols-5 border-b p-2'>
              <div className='col-span-3 font-bold text-xl'>
                Particulars
              </div>
              <div className='col-span-1 justify-self-end'>
                <p className='font-bold text-xl'>
                  Debit
                </p>
              </div>
              <div className='cols-span-1 justify-self-end'>
                <p className='font-bold text-xl'>
                  Credit
                </p>
              </div>
            </div>
            {/* body */}
            <div className='my-2'>
              <div className='p-2'>
                <h4 className='font-bold text-lg border-b text-primary-500'>Assets</h4>
                <div className='py-1'>
                  <div className='grid grid-cols-5 px-2'>
                    <div className='col-span-3'>
                      Accounts Receivable
                    </div>
                    <div className='col-span-1 justify-self-end'>
                      <p className='col-span-3'>
                        10000
                      </p>
                    </div>
                    <div className='cols-span-1 justify-self-end'>
                      <p className='col-span-3'>
                        9000
                      </p>
                    </div>
                  </div>
                  <div className='grid grid-cols-5 px-2'>
                    <div className='col-span-3'>
                      Accounts Receivable
                    </div>
                    <div className='col-span-1 justify-self-end'>
                      <p className=''>
                        10000
                      </p>
                    </div>
                    <div className='cols-span-1 justify-self-end'>
                      <p className=''>
                        9000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-2'>
                <h4 className='font-bold text-lg border-b text-primary-500'>Liabilities</h4>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-3'>
                    Accounts Receivable
                  </div>
                  <div className='col-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      10000
                    </p>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      9000
                    </p>
                  </div>
                </div>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-3'>
                    Accounts Receivable
                  </div>
                  <div className='col-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      10000
                    </p>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      9000
                    </p>
                  </div>
                </div>

              </div>

              <div className='p-2'>
                <h4 className='font-bold text-lg border-b text-primary-500'>Expenses</h4>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-3'>
                    Accounts Receivable
                  </div>
                  <div className='col-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      10000
                    </p>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      9000
                    </p>
                  </div>
                </div>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-3'>
                    Accounts Receivable
                  </div>
                  <div className='col-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      10000
                    </p>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      9000
                    </p>
                  </div>
                </div>

              </div>

              <div className='p-2'>
                <h4 className='font-bold text-lg border-b text-primary-500'>Income</h4>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-3'>
                    Accounts Receivable
                  </div>
                  <div className='col-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      10000
                    </p>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      9000
                    </p>
                  </div>
                </div>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-3'>
                    Accounts Receivable
                  </div>
                  <div className='col-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      10000
                    </p>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      9000
                    </p>
                  </div>
                </div>

              </div>

              <div className='p-2'>
                <h4 className='font-bold text-lg border-b text-primary-500'>Equity</h4>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-3'>
                    Accounts Receivable
                  </div>
                  <div className='col-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      10000
                    </p>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      9000
                    </p>
                  </div>
                </div>
                <div className='grid grid-cols-5 px-2'>
                  <div className='col-span-3'>
                    Accounts Receivable
                  </div>
                  <div className='col-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      10000
                    </p>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='col-span-3'>
                      9000
                    </p>
                  </div>
                </div>

              </div>
            </div>
            {/* total */}
            <div className='p-2 border-t'>
              <div className='grid grid-cols-5 px-2'>
                <div className='col-span-3 font-bold text-lg'>
                  Total
                </div>
                <div className='col-span-1 justify-self-end'>
                  <p className='font-bold'>
                    10000
                  </p>
                </div>
                <div className='cols-span-1 justify-self-end'>
                  <p className='font-bold'>
                    9000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page