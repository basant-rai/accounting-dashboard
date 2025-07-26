import React, { FunctionComponent } from 'react'
import Select from 'react-select';

const data = [{
  "value": "Mat Lam Tam",
  "label": "Fintone"
}, {
  "value": "Greenlam",
  "label": "Span"
}, {
  "value": "Veribet",
  "label": "Sonsing"
}, {
  "value": "Overhold",
  "label": "Toughjoyfax"
}, {
  "value": "Matsoft",
  "label": "Tempsoft"
}, {
  "value": "Andalax",
  "label": "Sonair"
}, {
  "value": "Stronghold",
  "label": "Opela"
}, {
  "value": "Sub-Ex",
  "label": "Aerified"
}, {
  "value": "Biodex",
  "label": "Sonair"
}, {
  "value": "Temp",
  "label": "Toughjoyfax"
}]

interface Props {
  handleAdd?: any
}


const ReportSearch: FunctionComponent = () => {

  return (
    <div className=''>
      <Select
        // defaultValue=}
        // isMulti
        name="category-type"
        options={data}
        className="w-full"
        classNamePrefix="select type"
        placeholder={'Search keyword...'}
      />
    </div>
  )
}

export default ReportSearch