'use client'

const Total = () => {
  return (
    <div>
      <div className='md:w-1/3 ml-auto pt-4 mt-4 border-t md:border-none'>
        <div className='grid grid-cols-2'>
          <div>
            <h5 className='font-bold text-primary-500'>Subtotal</h5>
          </div>
          <div>
            0
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <h5 className='font-bold text-primary-500'>Add discount</h5>
          </div>
          <div>
            0
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <h5 className='font-bold text-primary-500'>Total</h5>
          </div>
          <div>
            0
          </div>
        </div>
      </div>
    </div>
  )
}

export default Total