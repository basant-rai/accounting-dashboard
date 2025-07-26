'use client'

import AddItem from '@/components/@sales/@invoices/AddItem'
import InvoiceFooter from '@/components/@sales/@invoices/InvoiceFooter'
import Goback from '@/components/reusable/Button/Goback'
import { Button } from '@/components/reusable/Button/button'
import CustomerVendorSelect from '@/components/reusable/select/customer-vendor-select/CustomerVendorSelect'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { useCallback, useState } from 'react'

const InvoiceForm = () => {
  const [select, setSelect] = useState(false)
  const [name, setName] = useState('')

  const handleAdd = useCallback((data: any) => {
    setSelect(false)
    setName(data.label)

  }, [])

  return (
    <div>
      <div className='inline-flex items-center'>
        <div>
          <Goback />
        </div>
        <div className="my-2 font-bold px-3 ">
          Add new invoice
        </div>
      </div>
      <form>
        <div className='px-3 my-4'>
          <h6 className='font-bold text-xl'>Invoice</h6>
          {/* <p className='text-sm text-gray-500'>Billing details appear in your invoice. Invoice Date is used in the dashboard and reports. Select the date you expect to get paid as the Due Date.
                </p> */}
          <div className='mt-4'>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='xl:w-1/2'>
                <div className='text-primary-500 font-bold text-sm'>Customer
                  <span className='text-red-500'>*</span>
                </div>
                <div className='relative flex justify-center items-center space-x-2 py-10 mt-2 px-10 border border-primary-500 rounded-lg hover:cursor-pointer' onClick={() => setSelect(!select)}>
                  {
                    select ?
                      <div className='w-full absolute top-0'>
                        <CustomerVendorSelect handleAdd={handleAdd} />
                      </div> :
                      <>
                        {
                          name ?
                            <div>{name}</div> :
                            <>
                              <UserPlusIcon className='h-10 w-10' />
                              <div>Add a customer</div>
                            </>
                        }
                      </>
                  }
                </div>
              </div>
              <div className="grid xl:grid-cols-2 gap-4">
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Invoice Date
                    <span className='text-red-500'>*</span>
                    <input
                      type="date"
                      className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Due Date
                    <span className='text-red-500'>*</span>
                    <input
                      type="date"
                      className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
                <div className="w-full">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >
                    Invoice Number
                    <span className='text-red-500'>*</span>
                    <input
                      type="text"
                      placeholder="Enter invoice number"
                      className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
                <div className="">
                  <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Order Number
                    <span className='text-red-500'>*</span>
                    <input
                      type="text"
                      placeholder="Enter order number"
                      className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                  </label>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <AddItem />
            </div>
            <div className='mt-8'>
              <InvoiceFooter />
            </div>
            <div className="text-end mt-6">
              <Button htmlType={'submit'}>Save</Button>
            </div>
          </div>
        </div>

      </form>
    </div>

  )
}

export default InvoiceForm