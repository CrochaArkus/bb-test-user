import {memo} from 'react'

import './index.css'

export const NotFound = memo(() => {
  return (
    <div className='not-found-container'>
      <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg' alt='404' />
    </div>
  )
})