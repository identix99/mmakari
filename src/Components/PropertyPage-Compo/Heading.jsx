import React from 'react';

export const Heading = (props) => {
  return (
    <div className="heading_for_propertypage">
         <h2 className='head_part-1'> {props.title1}<span className='bold_part'> {props.boldPart} </span></h2>
         <p className='head_part-2'>{props.text} </p>
    </div>
  )
}
