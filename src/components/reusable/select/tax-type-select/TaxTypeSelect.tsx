import React from 'react'
import Select from 'react-select';

const TaxTypeData = [
  { value: 'compound', label: 'Compound' },
  { value: 'fixed', label: 'Fixed' },
  { value: 'inclusive', label: 'Inclusive' },
  { value: 'normal', label: 'Normal' },
  { value: 'with-holding', label: 'Withholding' },
]

const TaxTypeSelect = () => {
  return (
    <div>
      <Select
        // defaultValue=}
        // isMulti
        name="taxt-type-data"
        options={TaxTypeData}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  )
}

export default TaxTypeSelect