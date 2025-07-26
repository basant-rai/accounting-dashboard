'use client'
import React from 'react'

const page = () => {
  
  return (
    <div className="w-full max-w-full px-8 flex-0 ">
      <div className='bg-white border-0 rounded-2xl '>
        <h5 className="p-6 mb-0 font-bold text-2xl text-primary-500">Balance Sheet</h5>
        <div className='px-1 mx-6 border-l'>
          {/* assets */}
          <div className=''>
            <h4 className='font-bold text-xl py-2 border-b'>ASSETS</h4>
            <div>
              <div className='py-2 space-y-2'>
                <div className=''>
                  <h5 className='px-2 font-bold text-primary-500'>
                    Current Asset</h5>
                  <div className='px-8 relative'>
                    <div className='grid grid-cols-5 space-y-1 '>
                      <div className='col-span-4'>
                        Accounts Receivable
                      </div>
                      <div className='col-span-1'>
                        ₨28,250.00
                      </div>
                    </div>
                    <div className='grid grid-cols-5 space-y-1 '>
                      <div className='col-span-4'>
                        Accounts Receivable
                      </div>
                      <div className='col-span-1'>
                        ₨28,250.00
                      </div>
                    </div>
                    <div className='grid grid-cols-5 space-y-1 '>
                      <div className='col-span-4'>
                        Accounts Receivable
                      </div>
                      <div className='col-span-1'>
                        ₨28,250.00
                      </div>
                    </div>
                  </div>

                </div>
                <div className=''>
                  <h5 className='px-2 font-bold text-primary-500'>
                    Bank & Cash</h5>
                  <div className='px-8 relative'>
                    <div className='grid grid-cols-5 space-y-1 '>
                      <div className='col-span-4'>
                        Accounts Receivable
                      </div>
                      <div className='col-span-1'>
                        ₨28,250.00
                      </div>
                    </div>
                    <div className='grid grid-cols-5 space-y-1 '>
                      <div className='col-span-4'>
                        Accounts Receivable
                      </div>
                      <div className='col-span-1'>
                        ₨28,250.00
                      </div>
                    </div>
                    <div className='grid grid-cols-5 space-y-1 '>
                      <div className='col-span-4'>
                        Accounts Receivable
                      </div>
                      <div className='col-span-1'>
                        ₨28,250.00
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div className='grid grid-cols-2 w-full px-8 border-t py-2'>
                <div className='col-span-1 sm:justify-self-center '>
                  <div className='font-bold text-lg'>Total Assets</div>
                </div>
                <div className='cols-span-1 justify-self-end'>
                  <p className='font-bold text-lg'>Rs50000</p>
                </div>
              </div>
            </div>

          </div>
          <div>
            {/* liabilities */}
            <div className=''>
              <h4 className='font-bold text-xl py-2 border-b'>LIABILITIES </h4>
              <div>
                <div className='py-2 space-y-2'>
                  <div className=''>
                    <h5 className='px-2 font-bold text-primary-500'>
                      Current Liability</h5>
                    <div className='px-8 relative'>
                      <div className='grid grid-cols-5 space-y-1 '>
                        <div className='col-span-4'>
                          Accounts Payable
                        </div>
                        <div className='col-span-1'>
                          ₨28,250.00
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h5 className='px-2 font-bold text-primary-500'>
                      Tax</h5>
                    <div className='grid grid-cols-5 px-8'>
                      <div className='col-span-4'>
                        Vat
                      </div>
                      <div className='col-span-1'>
                        ₨28,250.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 w-full px-8 border-t py-2'>
                  <div className='col-span-1 sm:justify-self-center '>
                    <div className='font-bold text-lg'>Total Liabilities</div>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='font-bold text-lg'>Rs50000</p>
                  </div>
                </div>
              </div>

            </div>
            {/* Equity */}
            <div className=''>
              <h4 className='font-bold text-xl py-2 border-b'>Equity </h4>
              <div>
                <div className='py-2 space-y-2'>
                  <div className=''>
                    <div className='px-2'>
                      <div className='grid grid-cols-5 space-y-1 '>
                        <div className='col-span-4'>
                          <div className='font-bold text-primary-500'>Common Stock</div>
                        </div>
                        <div className='col-span-1'>
                          ₨28,250.00
                        </div>
                      </div>
                      <div className='grid grid-cols-5 space-y-1 '>
                        <div className='col-span-4'>
                          <div className='font-bold text-primary-500'>Addtional paid in capital</div>
                        </div>
                        <div className='col-span-1'>
                          ₨28,250.00
                        </div>
                      </div>
                      <div className='grid grid-cols-5 space-y-1 '>
                        <div className='col-span-4'>
                          <div className='font-bold text-primary-500'>Retained earnings</div>
                        </div>
                        <div className='col-span-1'>
                          ₨28,250.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2 w-full px-8 border-t py-2'>
                  <div className='col-span-1 sm:justify-self-center '>
                    <div className='font-bold text-lg'>Total Equity</div>
                  </div>
                  <div className='cols-span-1 justify-self-end'>
                    <p className='font-bold text-lg'>Rs50000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 w-full px-8 border-t py-2'>
              <div className='col-span-1 sm:justify-self-cente '>
                <div className='font-bold text-lg'>Total Liabilities and Equity</div>
              </div>
              <div className='cols-span-1 justify-self-end'>
                <p className='font-bold text-lg'>Rs50000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page