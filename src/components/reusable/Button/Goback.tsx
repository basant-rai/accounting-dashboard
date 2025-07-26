'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React from 'react'

const Goback = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={() => router.back()}>
        <ArrowLeftIcon className='h-4 w-4' />
      </button>
    </div>
  )
}

export default Goback