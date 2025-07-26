'use client'

import { Button } from '@/components/reusable/Button/button'
import { useRouter } from 'next/navigation'
import React, { FunctionComponent, useCallback } from 'react'

interface Props {
  link?: string,
  title: string
  type: IType
  setModal?: Function
}

type IType = 'modal' | 'link'

const Navbar: FunctionComponent<Props> = ({ link, title, type, setModal }) => {

  const router = useRouter()

  const handleAdd = useCallback(() => {
    if (type === 'link') {
      if (link) {
        router.push(link)
      }
    }
    if (type === 'modal') {
      if (setModal) {
        setModal('add')
      }
    }
  }, [router, type, link, setModal])

  return (
    <div>
      <div className="relative flex flex-col">
        <div className="p-6 pb-0">
          <div className="lg:flex">
            <div>
              <h5 className="mb-0 font-bold text-2xl text-primary-500">{title}</h5>
              <div className="mt-2">
                <label className=''>
                  <select className="p-2">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                  entries per Page
                </label>
              </div>
            </div>
            <div className="my-auto mt-6 ml-auto lg:mt-0">
              <div className="my-auto ml-auto flex flex-col sm:flex-row gap-2">
                <Button
                  type={"primary"}
                  rounded={"small"}
                  border={"primary"}
                  htmlType={'button'}
                  handleClick={handleAdd}
                >
                  Add
                </Button>
                <Button type={"optional"} rounded={"small"} border={"primary"} htmlType={'button'}>
                  Import
                </Button>
                <Button type={"optional"} rounded={"small"} border={"primary"} htmlType={'button'}>
                  Export
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar