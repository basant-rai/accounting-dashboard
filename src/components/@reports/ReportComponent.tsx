'use client'

import Link from 'next/link'
import React, { FunctionComponent } from 'react'

interface Props {
  reports: IReports[]
}

interface IReports {
  title: string
  href: string
  Icon: any
  desc: string
  key: string
}

const ReportComponent: FunctionComponent<Props> = ({ reports }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
        {
          reports.map((report, index) => (
            <Link
              key={index}
              href={report.href}
              className="relative flex flex-col min-w-0 break-words bg-gray-100 rounded-2xl hover:bg-gray-200 ">
              <div className="flex-auto p-4">
                <div className="flex flex-wrap -mx-3">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <p className="mb-0 leading-normal text-xl font-bold text-primary-500 ">{report.title}</p>
                      <p className="mb-0 font-bold ">
                        $53,000
                      </p>
                    </div>
                  </div>
                  <div className="w-4/12 max-w-full px-3 text-right flex-0">
                    <div className="inline-block w-8 h-8 p-1 text-center rounded-lg bg-primary-500 ">
                      <report.Icon className=" text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-xs  text-primary-500">{report.desc}</p>
              </div>
            </Link>
          ))
        }

      </div>
    </div>
  )
}

export default ReportComponent