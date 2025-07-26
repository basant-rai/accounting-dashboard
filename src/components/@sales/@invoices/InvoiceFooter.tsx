'use client'


const InvoiceFooter = () => {
  return (
    <div>
      <h5 className="font-bold text-xl">Advanced</h5>
      <p className="text-gray-500 text-sm">Select the category, add or edit the footer, and add attachments to your invoice.</p>
      <div className='grid grid-cols-2 gap-8 mt-4'>
        <div>
          <label className="font-bold text-sm text-primary-500">
            Footer
            <textarea
              rows={5}
              placeholder="Enter footer"
              // value={item.item_name}
              className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
          </label>
        </div>
        <div>
          <label className="font-bold text-sm text-primary-500">
            Category
            <input
              type="text"
              placeholder="Enter item name"
              // value={item.item_name}
              className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
          </label>
          <label className="font-bold text-sm text-primary-500">
            Attachment
            <input
              type="file"
              placeholder="Enter item name"
              // value={item.item_name}
              className="text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 placeholder:text-sm focus:border-fuchsia-300 focus:outline-none" />
          </label>
        </div>



      </div>
    </div>
  )
}

export default InvoiceFooter