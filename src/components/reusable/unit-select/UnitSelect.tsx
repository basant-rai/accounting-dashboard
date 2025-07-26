import React from 'react'
import Select from 'react-select';

const UnitData = [
  { value: 'box', label: 'Box' },
  { value: 'dozen', label: 'Dozen' },
  { value: 'gram', label: 'Gram' },
  { value: 'kg', label: 'Kilogram' },
]


const UnitSelect = () => {
  return (
    <div>
      <Select
        // defaultValue=}
        // isMulti
        name="colors"
        options={UnitData}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  )
}

export default UnitSelect