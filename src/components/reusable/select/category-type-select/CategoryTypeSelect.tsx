import React from 'react'
import Select from 'react-select';

const CategoryType = [
  { value: 'expense', label: 'Expense' },
  { value: 'income', label: 'Income' },
  { value: 'item', label: 'Item' },
  { value: 'other', label: 'Other' },
]

const CategoryTypeSelect = () => {
  return (
    <div>
      <Select
        // defaultValue=}
        // isMulti
        name="category-type"
        options={CategoryType}
        className="basic-multi-select"
        classNamePrefix="select type"
      />
    </div>
  )
}

export default CategoryTypeSelect