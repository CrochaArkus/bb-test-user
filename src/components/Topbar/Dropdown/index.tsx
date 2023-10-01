import {memo } from 'react'

import './index.css'

interface DropdownProps {
  show?: boolean
}

export const Dropdown = memo(({show = false}: DropdownProps) => {
  return (
    <div className={'dropdown-container hide'} style={{display: show? 'inherit' : 'none'}}>
      <div className='dropdown-content'>
        <div className='dropdown-item'>Products</div>
        <div className='dropdown-item'>Intentions</div>
        <div className='dropdown-item'>Brand Resources</div>
        <div className='dropdown-item'>Support</div>
      </div>
    </div>
  )
})