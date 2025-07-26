import { BreadCrumb } from "@/layout/breadcrumb/BreadCrumb"
import Footer from "@/layout/footer/Footer"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <div className=''>
      <BreadCrumb />
      <div className='w-full'>
        {children}
      </div>
      <div className="px-8">
        <Footer/>
      </div>
    </div>
  )
}