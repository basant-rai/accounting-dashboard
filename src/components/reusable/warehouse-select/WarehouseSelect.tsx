import React from 'react'
import Select from 'react-select';

const Warehouse = [
  { value: 'box', label: 'Main Warehouse' },
  { value: 'dozen', label: 'Primary Warehouse' },
  { value: 'gram', label: 'Secondary Warehouse' },
]


const WarehouseSelect = () => {
  return (
    <div>
      <Select
        // defaultValue=}
        // isMulti
        name="colors"
        options={Warehouse}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  )
}

export default WarehouseSelect