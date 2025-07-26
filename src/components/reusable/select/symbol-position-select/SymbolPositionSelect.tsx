import React from 'react'
import Select from 'react-select';

const TaxData = [
  { value: 'after-amount', label: 'After amount' },
  { value: 'before-amount', label: 'Before Amount' },
  // { value: 'vanilla', label: 'Vanilla' }
]

const SymbolPositionSelect = () => {
  return (
    <div>
      <Select
        // defaultValue=}
        // isMulti
        name="colors"
        options={TaxData}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  )
}

export default SymbolPositionSelect