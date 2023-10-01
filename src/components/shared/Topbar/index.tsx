import { memo, useState } from 'react'


import './index.css'
import { Dropdown } from '../../Topbar/Dropdown'

export const Topbar = memo(() => {
  const [showProductDropdown, setShowProductDropdown] = useState(false)
  const [showIntentionsDropdown, setShowIntentionsDropdown] = useState(false)
  const [showBrandResourcesDropdown, setShowBrandResourcesDropdown] = useState(false)
  const [showSupportDropdown, setShowSupportDropdown] = useState(false)


  const handleDropdownHide = () => {
    setShowProductDropdown(false)
    setShowIntentionsDropdown(false)
    setShowBrandResourcesDropdown(false)
    setShowSupportDropdown(false)
  }

  const handleProductClick = () => {
    setShowProductDropdown(!showProductDropdown)
    handleDropdownHide()
  }

  const handleIntentionsClick = () => {
    setShowIntentionsDropdown(!showIntentionsDropdown)
    handleDropdownHide()
  }

  const handleBrandResourcesClick = () => {
    setShowBrandResourcesDropdown(!showBrandResourcesDropdown)
    handleDropdownHide()
  }

  const handleSupportClick = () => {
    setShowSupportDropdown(!showSupportDropdown)
    handleDropdownHide()
  }



  return (
    <div className='container'>
      <div className='content'>
        <div>
          <img src={require('../../../assets/logo.png')} alt='logo' className='logo' />
        </div>
        <div className='menu-items'>
            <div onClick={handleProductClick}>
              Products 
              <span className='down-arrow'>▼</span>
              <Dropdown/>
            </div>
            <div onClick={handleIntentionsClick}>
              Intentions 
              <span className='down-arrow'>▼</span>
              <Dropdown />
            </div>
            <div onClick={handleBrandResourcesClick}>
              Brand Resources 
              <span className='down-arrow'>▼</span>
              <Dropdown />
            </div>
            <div onClick={handleSupportClick}>
              Support 
              <span className='down-arrow'>▼</span>
              <Dropdown />
            </div> 
        </div>
        <div className='avatar-container'>
          <span>Hi Bobby Stuckey!</span>
          <img src={require('../../../assets/avatar.png')} alt='avatar' className='avatar' />
        </div>
      </div>
    </div>
  )
})