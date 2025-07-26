import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ReactTable from '../table/ReactTable'

export default function HistoryDisclosure() {
  const Column_Data = [
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      Header: 'Status',
      accessor: 'status'
    },
    {
      Header: 'Description',
      accessor: 'due_date'
    },

  ]
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Histories</span>
                <ChevronDownIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ReactTable columnData={Column_Data} />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}
      </div>
    </div>
  )
}
