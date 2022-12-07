import classNames from 'classnames';
import React from 'react'

export const Rating=({rating})=> {
  return (
    <div className="flex flex-row items-center">
{[...Array(5)].map((_,index) => {
  index+=1;
        return (
             <span key={index} className={classNames({
              "text-orange-400":index<=rating,
             "text-gray-400":index>rating
            })}>&#9733;</span>
            
        );
      })}
    </div>
  )
}
