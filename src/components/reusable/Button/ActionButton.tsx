'use client'

import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import React, { Fragment, FunctionComponent, useCallback } from 'react'

interface Props {
  actions: IAction[]
  setModalType?: Function
}

interface IAction {
  name: string,
  href: string,
  key: string
}

const ActionButton: FunctionComponent<Props> = ({ actions, setModalType }) => {
  const router = useRouter()

  const handleAction = useCallback((link: string, key: string) => {
    if (link) {
      router.push(link)
    }
    else {
      if (setModalType) {
        setModalType(key)
      }
    }

  }, [router, setModalType])

  return (
    <div>
      <Menu as='div' className='relative w-10'>
        <Menu.Button className=' inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 bg-gray-100 px-2 hover:text-gray-800 hover:bg-gray-200 hover:shadow rounded-md focus:outline-none'>
          <span>
            <svg
              className='h-5 w-5 fill-black'
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
            </svg>
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100 "
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={`absolute w-56 right-5 mt-1 z-10`} >
            {
              // dropdownPosition === 'top-5' &&
              // <div className='w-0 h-0 -right-48 relative'
              //   style={{ borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: ' 14px solid #244D61' }} />
            }

            <Menu.Item>
              <div className="z-10 bg-secondary-500 rounded  shadow-xl">
                <ul className="py-1 text-sm text-gray-700 divide-y divide-gray-50" >
                  {
                    actions.map((action, index) => (
                      <li className='p-1' key={index}>
                        <div onClick={() => handleAction(action.href, action.key)}>
                          <div className="block rounded-md py-2 px-4 hover:text-white hover:bg-primary-500 hover:cursor-pointer capitalize">
                            {action.name}
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ActionButton