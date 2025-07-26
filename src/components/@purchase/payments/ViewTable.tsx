'use client'

const ViewTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3">Number</th>
            <th scope="col" className="px-4 py-3">Vendor</th>
            <th scope="col" className="px-4 py-3">Invoice Date</th>
            <th scope="col" className="px-4 py-3">Bill Amount</th>
            <th scope="col" className="px-4 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <th scope="row" className=" px-4 py-2 font-medium text-gray-900 whitespace-nowrap ">
              BILL_SV-152389
            </th>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
              Qwerty tech
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
              <div className="">
                06 Feb 2023
              </div>
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Rs 800000</td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Rs 10000</td>

          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default ViewTable