import React from 'react'
import { FieldArray } from 'formik'
import FormControl from '../FormControl'

interface IFieldArrayData {
  name: string;
}

const FieldArrayComponent:React.FC<IFieldArrayData> = ({name}) => {
  return (
    <FieldArray name={name}>
    {fieldArrayProps => {
      const { push, remove, form } = fieldArrayProps
      const { values } = form
      return (
        <div>
          {values[name].map((field:any, index:any) => (
            <div className='flex items-end' key={index}>
              <FormControl
                control='input' name={`${name}[${index}]`} placeholder={`${name}[${index}]`}
                label={`${name}[${index}]:`} type="text" className='flex-auto'
              />
              {index > 0 && (
                <button type='button' className='FieldArrayBtn BtnDark' onClick={() => remove(index)}>
                  -
                </button>
              )}
              <button type='button' className='FieldArrayBtn BtnDark' onClick={() => push('')}>
                +
              </button>
            </div>
          ))}
        </div>
      )
    }}
  </FieldArray>
  )
}

export default FieldArrayComponent