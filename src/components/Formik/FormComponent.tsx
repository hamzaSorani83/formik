import React, { ReactNode } from 'react'
import { Form } from 'formik'

export interface IForm {
  varient:  "blue" | "purple" | "success" | "danger"
  | "warning" | "info" | 'light' | 'dark';
  className?: string;
  children?: ReactNode;
}


const FormComponent: React.FC<IForm> = ({ className, children, varient }) => {
  const formVarient = "Form-" + varient[0].toUpperCase() + varient.substring(1);
  className = ['Form',formVarient , className].join(" ");
  
  return (
    <Form className={className}>
      {children}
    </Form>
  )
}

export default FormComponent