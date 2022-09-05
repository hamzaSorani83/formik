import React, { ReactNode } from 'react'

export interface IButton {
  varient:  "blue" | "purple" | "success" | "danger"
  | "warning" | "info" | 'light' | 'dark';
  className?: string;
  children: ReactNode;
  [rest: string]: any;
}

const Button: React.FC<IButton> = ({varient, className, children, ...rest}) => {
  const buttonVarient = "Btn" + varient[0].toUpperCase() + varient.substring(1);
  className = ['Btn', buttonVarient , className].join(" ");
  
  return (
    <button className={className} {...rest}>
      { children }
    </button>
  )
}

export default Button