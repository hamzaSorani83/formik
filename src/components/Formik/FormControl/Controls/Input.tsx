import { Field } from "formik";


interface IProps {
  name: string;
  [rest: string]: any;
}

const Input: React.FC<IProps> = ({ name, ...rest }) => {
  return (
    <Field name={name} id={name} {...rest} className="Form-input" />
  )
}

export default Input;