'use client'
import ItemForm from '@/components/@inventory/@items/ItemForm'

const Create = () => {
  return (
    <div className='px-8 mt-8'>
      <div className="mx-auto flex flex-col p-4 break-words bg-white border-0 h-auto opacity-100 visible rounded-xl ">
        <ItemForm />
      </div>
    </div>
  )
}

export default Create