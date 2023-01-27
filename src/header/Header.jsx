import React from 'react'
import './Header.css'

function Header() {
  return (
<nav className='#512da8 deep-purple darken-2'>
    <div className="nav-wrapper">
      <a href='https://dzmitrydm.github.io/movies-project/'  className="brand-logo"> Shop</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><span >React</span></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header
