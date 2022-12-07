import React from 'react'

export const IconBox=({icon,bgColor="red",title,content})=> {
  return (
    <div className="flex flex-row gap-6 items-center">
        {/* Icon */}
       {icon && <div className="w-16 h-16 p-4 flex justify-center rounded-2xl items-center text-white fill-white" style={{backgroundColor:bgColor}}>{icon}</div>}
        <div className="flex flex-1 flex-col gap-1">
            {/* Title */}
            <h3 className=' text-2xl font-bold text-gray-600 leading-10'>
           {title}
            </h3>
            {/* Content */}
            <p className=' text-xl font-medium text-gray-400 leading-10'>
            {content}       
            </p>
        </div>
    </div>
  )
}
