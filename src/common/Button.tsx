import React, { ReactEventHandler, ReactNode } from 'react'
import classNames from 'classnames';

interface ButtonProps{
  variant?:string
  disabled?:boolean
  children?:ReactNode
  onClick?:ReactEventHandler
}
export const Button=({
  variant="primary",
  onClick,
  disabled=false,
  children
}:ButtonProps)=> {
  /////////
  return (
    
    <button onClick={onClick} type="submit" disabled={disabled} className={classNames('w-full px-9 py-3 rounded-md lg:font-semibold font-medium  lg:text-base text-[14px]',{
      'bg-orange-500 text-white  shadow-lg':variant==='primary',
      'bg-white text-orange-500':variant==='secondary',
      'cursor-not-allowed bg-opacity-50':disabled,
      'bg-white text-orange-500 border border-orange-500':variant==='secondary-outlined'
    })}>{children}</button>

    
  )
}
