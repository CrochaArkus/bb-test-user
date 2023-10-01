import {memo, useState} from 'react'

import './index.css'


type Item = {
  name: string,
  url: string,
  imageUrl?: string
}


const MOCK: Item[] = [
  {
    name: 'FLYERS',
    url: '/flyers',
    imageUrl: ''
  },{
    name: 'POSTCARDS',
    url: '/postcards',
    imageUrl: ''
  },{
    name: 'BROCHURES',
    url: '/brochures',
    imageUrl: ''
  },{
    name: 'SOCIAL MEDIA',
    url: '/social-media',
    imageUrl: ''
  },{
    name: 'FACEBOOK ADS/SOCIAL MEDIA',
    url: '/facebook-ads-social-media',
    imageUrl: ''
  },{
    name: 'SINGLE PROPERTY SITES',
    url: '/single-property-sites',
    imageUrl: ''
  },{
    name: 'DOOR HANGERS',
    url: '/door-hangers',
    imageUrl: ''
  },{
    name: 'PRESENTATIONS',
    url: '/presentations',
    imageUrl: ''
  },{
    name: 'VIDEOS',
    url: '/videos',
    imageUrl: ''
  },{
    name: 'LETTERS/LETTERHEADS',
    url: '/flyers',
    imageUrl: ''
  }
]

export const Sidenav = memo(() => {
  const [items] = useState(MOCK);
  
  const redirect = (url: string) => {
    window.location.href = url;
  }

  return (
    <>
      <div className='tab-container'>
      </div>
      <div className='items'>
        {items && items.map((item, index) => {
          return (
            <div  className={'item'} onClick={() => redirect(item.url)} >
              {item.name}
            </div>
          )
        })
        }
      </div>
    </>
  )
})