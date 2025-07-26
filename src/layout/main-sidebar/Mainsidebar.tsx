'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { XMarkIcon } from '@heroicons/react/24/solid'

import { MainSidebarItems } from './_data'
import { ISidebarListItem } from '../../../@types/entities/ISidebarItem'

type IMenu = 'profile' | 'setting' | 'notifications'

export const MainSidebar = () => {

  const [open, setOpen] = useState<IMenu | null>(null)
  const pathname = usePathname();

  const key = MainSidebarItems.map((m) => m.key)
  const titles = pathname?.split('/').slice(1)
  const hasKey = key.some((k) => titles.includes(k));

  useEffect(() => {
    if (hasKey) {
      const matchingKey = key.find((k) => titles.includes(k));
      setOpen(matchingKey as IMenu);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasKey, pathname])

  return (
    <>
      <div className={`w-16  relative min-h-screen flex flex-col justify-between bg-gray-100 `}>
        <div className='mx-auto mt-8 space-y-5'>
          {
            MainSidebarItems.map((d, idx) => (
              <div key={idx} >
                {
                  open === d.key ?
                    <button onClick={() => setOpen(null)}>
                      <XMarkIcon className='h-6 w-6 text-primary-500' />
                    </button> :
                    <button onClick={() => setOpen(d.key as any)} title={d.title}>
                      <d.Icon className='h-6 w-6 text-primary-500' />
                    </button>
                }
              </div>
            ))
          }
        </div>
        <div className={`${open ? 'w-72' : 'w-0 '} ${open === null && 'w-0 transition-width'} duration-200 ml-16 bg-primary-500 min-h-screen z-50 absolute `}>
          {
            MainSidebarItems.map((d, idx) => (
              <div key={idx}>
                {
                  open === d.key &&
                  <div className={`text-white mt-2 p-4 block`}>
                    <div className='px-2'>
                      {/* <d.Icon className='h-5 w-5 flex-shrink-0' /> */}
                      <h6 className='font-bold text-2xl'>{d.title}</h6>
                    </div>
                    <div className='mt-4 space-y-1'>
                      {
                        d.children.map((item, jdx) => (
                          <div key={jdx} >
                            <NavLinkItem
                              key={`main-content-${jdx}`}
                              value={item.key}
                              href={item.href}
                              Icon={item.Icon}
                              title={item.title}
                            />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                }
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}


function NavLinkItem({ href, title, Icon }: ISidebarListItem) {

  const pathname = usePathname();
  const match = href ? pathname === href : false;

  return (
    <Link href={href ?? ""} >
      <div
        className={`${match ? 'bg-white text-black' : ' text-white hover:bg-gray-300 hover:text-black '} flex items-center rounded-lg px-2 py-1  text-sm`}
      >
        {
          Icon &&
          <div
            className={`${match ? 'bg-green-700 text-white' : 'bg-white text-green-700 '} p-1 rounded-md `}>
            <Icon className='w-4 h-4' />
          </div>
        }
        <span className="ml-3 text-sm">{title}</span>
      </div>

    </Link>
  );
}



