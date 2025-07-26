import { Statistics } from '@/components/@dashboard/Statistics'
import { BreadCrumb } from '@/layout/breadcrumb/BreadCrumb'

export default function Home() {
  return (
    <div className='w-full'>
      <BreadCrumb />
      <Statistics/>
    </div>
  )
}
