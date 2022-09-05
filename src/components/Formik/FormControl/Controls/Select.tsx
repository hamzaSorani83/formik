import { Field } from "formik";


export interface ISelect {
  name: string;
  options?: string[];
  [rest: string]: any;
}


const Input: React.FC<ISelect> = ({ name, options,...rest }) => {
  
  return (
    <Field as="select" name={name} id={name} {...rest} className="Form-select" >
      <option
        value={''}
        className='capitalize'>
        {'-- Select One --'}
      </option>
      {
        options && options.map(option => {
          return(
            <option
              value={option}
              key={option}
              className='capitalize'>
              {option}
            </option>
          )
        })
      }
    </Field>
  )
}

export default Input;