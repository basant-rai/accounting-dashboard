'use client'

const GeneralLedgerTable = () => {
  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3">Date</th>
            <th scope="col" className="px-4 py-3">Ref</th>
            <th scope="col" className="px-4 py-3">Description</th>
            <th scope="col" className="px-4 py-3">Debit</th>
            <th scope="col" className="px-4 py-3">Credit</th>
            <th scope="col" className="px-4 py-3">Balance</th>
          </tr>
        </thead>
        <tbody className='divide-y'>
          <tr className=" hover:bg-gray-100">
            <td className="px-4 py-2">
              2022/12/12
            </td>
            <td className="px-4 py-2">
              asds
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, facilis!
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">1500</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">1400</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
              20000
            </td>
          </tr>

          <tr>
            <td className='px-4 py-3' colSpan={3}>
              <span className='font-bold text-md text-black'>Totals and Closing Balance
              </span>
            </td>
            <td className='px-4 py-3'>
              20000
            </td>
            <td className='px-4 py-3'>
              20000
            </td>
            <td className='px-4 py-3'>
              20000
            </td>

          </tr>
          <tr>
            <td className='px-4 py-3' colSpan={5}>
              <span className='font-bold text-md text-black'>Balance Change
              </span>
            </td>
            <td className='px-4 py-3'>
              20000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GeneralLedgerTable