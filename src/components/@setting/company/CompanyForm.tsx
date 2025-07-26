'use client'

import { Button } from '@/components/reusable/Button/button'
import React, { ChangeEvent, useState } from 'react'

const CompanyForm = () => {

  const [previewImage, setPreviewImage] = useState<string>()
  const [photo, setPhoto] = useState<string | null>(null)

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = e?.target?.files?.[0];
    setPhoto(file)
    const selectFile = URL.createObjectURL(file)
    setPreviewImage(selectFile)
  }

  return (
    <div>
      <form className=''>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className='sm:col-span-2 text-center justify-self-center'>
            <div>
              <label htmlFor="speaker_photo" className="block hover:cursor-pointer text-sm text-gray-700 font-semibold text-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="rounded-xl h-56 w-56 object-cover"
                  src={previewImage !== undefined || null ? `${previewImage}` : 'https://i.pinimg.com/736x/cb/90/1c/cb901c6392512c9186cd55caf5e00d5f.jpg'}
                  alt="profile pic"
                />
                <div className="text-center mt-1">Change Photo</div>
              </label>
              <input
                type="file"
                id="speaker_photo"
                name="speaker_photo"
                className="hidden mt-1 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                onChange={onSelectFile}
                accept="image/*"
              />
            </div>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >
              Email
              <input type="email"
                placeholder="Enter Email Address" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Tax Number
              <input
                type="text"
                placeholder="Tax Number"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Phone Number
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Address line
              <input
                type="text"
                placeholder="Enter address line"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Town / City</label>
            <input
              type="text"
              name="ProductName"
              placeholder="Enter City"
              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Postal / Zip code</label>
            <input
              type="text"
              placeholder="Enter Postal"
              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-slate-700" >Province / State
              <input
                type="text"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
          <div>
            <label className="mt-6 mb-2 ml-1 font-bold text-sm text-primary-500" >Country
              <input
                type="text"
                placeholder="Enter Country"
                className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
            </label>
          </div>
        </div>
        <div className="flex mt-6 justify-end">
          <div>
            <Button type={"primary"} rounded={"small"} border={"primary"} htmlType={'button'}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CompanyForm