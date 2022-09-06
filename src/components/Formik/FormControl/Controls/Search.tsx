import React from 'react'
import Button from './Button'
import { IForm } from '../../FormComponent'

interface IProps {
  varient: IForm["varient"];
  className?: string;
  parentClassName?: string;
  [rest: string]: any;
}

const Search: React.FC<IProps> = ({ varient, className, parentClassName, ...rest }) => {
  className = ["Form-input py-3", className].join(" ");
  parentClassName = ["relative mt-2", parentClassName].join(" ");
  return (
    <div className={parentClassName}>
    <input type="search" className={className} {...rest}  />
    <Button type='button' varient={varient} className="font-normal px-3 py-2 text-sm rounded-lg absolute right-2.5 bottom-2.5 capitalize">Search</Button>
  </div>
  )
}

export default Search