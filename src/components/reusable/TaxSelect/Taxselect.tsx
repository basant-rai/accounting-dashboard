import React from 'react'
import Select from 'react-select';
import { TaxData } from './_data';


const Taxselect = () => {
  return (
    <div>
      <Select
        name="colors"
        options={TaxData}
        className="w-full"
        classNamePrefix="Select Tax"
      />
    </div>
  )
}

export default Taxselect