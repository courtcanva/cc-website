import React from 'react'
import CardItem from './CardItem'
import { cartItemStyles} from "./cardItem.styles";

const CardContainer = () => {

 
  return (
    <div className='relative flex flex-col md:flex-row md:space-x-10 md:animate-enterSlow w-[100%] md:justify-center'>
      {cartItemStyles.map((item,index)=> (<CardItem {...item} key={index}/>))}
    </div>
  )
}

export default CardContainer