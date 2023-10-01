import { memo } from 'react'
import { Item } from '../../components/shared/Item'
import './index.css'

export const Postcards = memo(() => {
  return (
    <div>
      <span className='title'>Postcards</span>
      <div className='items-container'>
        <Item title='Postcard' clickHandler={() => {}} />
        <Item title='Postcard 2' clickHandler={() => {}} />
        <Item title='Postcard 3' clickHandler={() => {}} />
      </div>
    </div>
  )
})