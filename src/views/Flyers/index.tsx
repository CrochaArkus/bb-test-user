import { memo } from 'react'
import { Item } from '../../components/shared/Item'
import './index.css'

export const Flyers = memo(() => {
  return (
    <div>
      <span className='title'>Flyers</span>
      <div className='items-container'>
        <Item title='Listing' clickHandler={() => {}} />
        <Item title='Open House' clickHandler={() => {}} />
      </div>
    </div>
  )
})