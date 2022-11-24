import React from 'react'
import CardItem from './CardItem'
import { cartItemStyles} from "./cardItem.styles";
import { useInView } from 'react-intersection-observer';

const CardContainer = () => {
  const { ref, inView } = useInView();
 
  return (
    <div className='relative flex flex-col md:flex-row md:space-x-10 md:animate-enterSlow w-[100%] items-center justify-center' ref={ref}>
      {cartItemStyles.map((item,index)=> (<CardItem item={item} key={index} isInView={inView }/>))}
    </div>
  )
}

export default CardContainer