'use client'

import { Bars3Icon, BuildingStorefrontIcon, Cog6ToothIcon, MagnifyingGlassIcon, Squares2X2Icon, UserIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import SmallSIdebar from '../sidebar/SmallSIdebar'

export const BreadCrumb = () => {
  const [show, setShow] = useState(false)

  const pathname = usePathname()
  const titles = pathname?.split('/').slice(1)

  return (
    <div>
      <nav className=" flex flex-wrap items-center justify-between px-0 py-2 mx-6 mt-4 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start sticky ">
        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
          <nav className='flex lg:flex-none items-center space-x-2 lg:space-x-0'>
            <div className='mt-3 lg:hidden'>
              <button
                onClick={() => setShow(true)}
                className='text-black'>
                <Bars3Icon className='h-8 w-8' />
              </button>
            </div>
            <ul className="flex items-center flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">

              <li className="leading-normal text-sm">
                <a className="text-slate-700 opacity-30 " href="/">
                  <BuildingStorefrontIcon className='h-4 w-4' />
                </a>
              </li>
              {
                titles.map((title, idx) => (
                  <li key={idx}
                    className="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
                    <span className="opacity-50 text-slate-700 capitalize" >{title}</span>
                  </li>
                ))
              }
            </ul>
          </nav>
          
          <div className="flex items-center justify-end mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto" id="navbar">
            <div className="md:flex items-center hidden md:ml-auto md:pr-4">
              <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                  <MagnifyingGlassIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                <input type="text" className="pl-9 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Type here..." />
              </div>
            </div>
            <ul className="flex flex-row justify-end pl-0 mb-0 list-none">
              <li className="flex items-center justify-end">
                <div className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500 
                ">
                  <Squares2X2Icon className="h-5 w-5 sm:mr-1" aria-hidden="true" />
                </div>
              </li>

              <li className="flex items-center pl-4">
                <div className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500 
                ">
                  <UserIcon className="h-5 w-5 sm:mr-1" aria-hidden="true" />
                  {/* <span className="hidden sm:inline">Sign In</span> */}
                </div>
              </li>
              <li className="flex items-center pl-4">
                <div className="block p-0 transition-all ease-nav-brand text-sm text-slate-500">
                  <div className="w-4.5 overflow-hidden">
                    <Cog6ToothIcon className="h-5 w-5 " />
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <SmallSIdebar
        show={show === true}
        handleShow={() => setShow(false)}
      />
    </div>
  )
}
