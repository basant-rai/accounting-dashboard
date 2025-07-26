import React from 'react'
import Select, { components } from "react-select";


const NAME = [{
  "label": "Hy",
  "value": "Leonhard"
}, {
  "label": "Teodoro",
  "value": "Chelsey"
}, {
  "label": "Robby",
  "value": "Daune"
}, {
  "label": "Hart",
  "value": "Derry"
}, {
  "label": "Archer",
  "value": "Sky"
}, {
  "label": "Winne",
  "value": "Robert"
}, {
  "label": "Bertina",
  "value": "Bradney"
}, {
  "label": "Beryle",
  "value": "Jarrid"
}, {
  "label": "Hilly",
  "value": "Jacky"
}, {
  "label": "Roanne",
  "value": "Shelby"
}]

const Menu = (props: any) => {
  return (
    <>
      <components.Menu {...props}>
        <div className=''>
          {props.selectProps.fetchingData ? (
            <span className="fetching">Fetching data...</span>
          ) : (
            <div>{props.children}</div>
          )}
          <div className='text-center bg-primary-500'>
            <button
              className="text-center py-2 w-full text-white"
            // onClick={props.selectProps.changeOptionsData}
            >
              Add new
            </button>
          </div>
        </div>
      </components.Menu>
    </>
  );
};

const CustomerVendorSelect = ({ handleAdd }: any) => {
  return (
    <div>
      <Select
        defaultMenuIsOpen
        name="customer-vendor"
        options={NAME}
        components={{ Menu }}
        className="w-full"
        classNamePrefix="select"
        onChange={(data) => handleAdd(data)}
      />
    </div>
  )
}

export default CustomerVendorSelect