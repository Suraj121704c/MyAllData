import React from 'react';
import list from '../data';
import "../Styles/Amazon.css"
import Cards from './Card';

const Amazon = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Amazon