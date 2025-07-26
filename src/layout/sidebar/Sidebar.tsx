"use client"

import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { ISidebarListItem, sidebarItems } from './_data'
import { usePathname } from 'next/navigation';

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

interface INavLinkItemProps extends ISidebarListItem {
  isTopLevel: boolean;
}


const Sidebar = () => {

  const [open, setOpen] = useState(true)
  const pathname = usePathname();


  // const key = sidebarItems.map((m) => m.key)
  // const titles = pathname?.split('/').slice(1)
  // const hasKey = key.some((k) => titles.includes(k));

  // console.log(hasKey)

  const [expandedGroups, setExpandedGroups] = useState<string[]>(
    sidebarItems.map((itm) => itm.key),
  );

  const updateActiveGroup = (group: string) => {
    if (expandedGroups.includes(group)) {
      setExpandedGroups(expandedGroups.filter((g) => g !== group));
    } else {
      setExpandedGroups([...expandedGroups, group]);
    }
  };

  return (
    <div>
      <div className={`${open ? 'w-56 sm:w-72' : 'w-20'} relative min-h-screen bg-black flex flex-col justify-between my-auto  duration-500 `}>
        <div className='overflow-y-auto overflow-x-hidden h-[calc(100vh-0px)]'>
          <div className="flex py-3 px-2 space-x-3 items-center">
            {/* <Link href="/" className='flex-shrink-0'>
              eslint-disable-next-line @next/next/no-img-element
              <img
                src='https://accounting.lsyt.com.np/public/img/logo.png'
                className='h-10 w-10 object-cover ' alt="logo"
              />
            </Link> */}
            <h3 className='text-white text-lg font-bold truncate'>Account Dashboard</h3>
            <ChevronDownIcon className='text-white h-5 w-5' />
          </div>
          {/* <div
            className='absolute bg-black text-white right-0 top-10'
            onClick={() => setOpen(!open)}
          >
            button
          </div> */}
          <div className='px-4 mt-4 text-sm'>
            {sidebarItems.map((item, index) => (
              <div key={index} >
                {item.children && (
                  <Fragment>
                    <div
                      className={`flex items-center justify-between px-3 py-2 my-1 rounded-lg cursor-pointer text-white hover:bg-gray-300 hover:text-black`}
                      onClick={() => updateActiveGroup(item.key)}
                    >
                      <div className='flex items-center'>
                        <div className={` bg-white text-green-700 shadow-gray-300 p-1 mr-3 rounded-md`}>
                          {
                            item.Icon &&
                            <item.Icon className='w-5 h-5 text-green-700' />
                          }
                        </div>
                        <span className={` duration-500 text-md `}>{item.title}</span>
                      </div>
                      <div className="">
                        {expandedGroups.includes(item.key) && <ChevronUpIcon className='text-white h-4 w-5' />}
                        {!expandedGroups.includes(item.key) && <ChevronDownIcon className='text-white h-4 w-5' />}
                      </div>
                    </div>

                    {expandedGroups.includes(item.key) && (
                      <div>
                        {item.children?.map((child, jndex) => (
                          <div key={jndex} className="pl-8">
                            {
                              !child.children && (
                                <NavLinkItem
                                  open={open}
                                  key={`main-content-${jndex}`}
                                  value={child.key}
                                  href={child.href}
                                  // icon={child.icon}
                                  title={child.title}
                                  isTopLevel={false}
                                />
                              )
                            }
                          </div>
                        ))}
                      </div>
                    )}
                  </Fragment>
                )}

                {!item.children && (
                  <NavLinkItem
                    open={open}
                    key={`top-${index}`}
                    href={item.href}
                    Icon={item.Icon}
                    title={item.title}
                    isTopLevel={true}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

function NavLinkItem({ href, title, Icon, open, value }: INavLinkItemProps) {

  const pathname = usePathname();
  const match = href ? pathname === href : false;
  const titles = pathname?.split('/').slice(1)
  const hasKey = titles.includes(value)

  return (
    <Link href={href ?? ""} >
      {/* {({ isActive }) => ( */}
      <div
        className={`${(match || hasKey) ? 'bg-white text-black' : ' text-white hover:bg-gray-300 hover:text-black '} flex items-center rounded-lg px-3 py-2 my-1 `}
      >
        {
          Icon &&
          <div
            className={`${(match || hasKey) ? 'bg-green-700 text-white' : 'bg-white text-green-700 '} p-1 rounded-md `}>
            <Icon className='w-5 h-5' />
          </div>
        }
        <span className="h-4 flex items-center ml-3">{title}</span>
      </div>
      {/* )} */}
    </Link>
  );
}


