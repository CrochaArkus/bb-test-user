import {memo} from 'react'

import './index.css'

interface ItemProps {
  title: string,
  clickHandler: () => void
  image?: string
}

export const Item = memo(({title, clickHandler, image = ''}: ItemProps) => {
  return (
    <div className='item-container'>
      <img src={require(`../../../assets/flyer.png`)} alt='logo' className='item-image' />
      <div className='item-title'>{title}</div>
      <div className='item-button' onClick={clickHandler}>Choose Design</div>
    </div>
  )
})