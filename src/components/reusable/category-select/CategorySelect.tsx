import React from 'react'
import Select from 'react-select';
import { CategoryData } from './_data';


const CategorySelect = () => {
  return (
    <div>
      <Select
        // defaultValue=}
        // isMulti
        name="colors"
        options={CategoryData}
        
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  )
}

export default CategorySelect
