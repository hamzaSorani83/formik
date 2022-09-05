import React from 'react'
import Button from './Button'
import { IForm } from '../../FormComponent'

interface IProps {
  varient: IForm["varient"];
}

const Search:React.FC<IProps> = ({varient}) => {
  return (
    <div className="relative mt-2">
    <input type="search" className="Form-input" placeholder="Search Mockups, Logos..." required />
    <Button type='button' varient={varient} className="font-normal px-3 py-2 text-sm rounded-lg absolute right-2.5 bottom-1.5 capitalize">Search</Button>
  </div>
  )
}

export default Search