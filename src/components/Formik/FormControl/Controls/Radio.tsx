import React from "react";
import { Field } from "formik";
import Label from './Label'

interface IRadio {
  name: string;
  options?: IRadioOption[];
  [rest: string]: any;
}

export interface IRadioOption {
  key: string;
  value: string;
}

const Input: React.FC<IRadio> = ({ name, options, ...rest }) => { 
  return (
    <Field name={name} id={name} {...rest} >
      {
        ({ field }: any) => {
          return (
            options && options.map(option => {
              return(
                <div key={option.value} className="flex items-center mb-2" >
                  <Field
                    type="radio" id={option.value}
                    {...field}
                    value={option.value} className="Form-radio ring-blue-600"
                    checked={field.value === option.value}
                  />
                  <Label name={option.value} label={option.key} />
                </div>
              )
            })
          )
        }
      }
    </Field>
  )
}

export default Input;
