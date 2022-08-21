import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <p className='head-title'>Complete your Purchase</p>
        <div className='nav'>
        <NavLink to='/'>Personal Info</NavLink>
        <NavLink to='/billing-info'>Billing Info</NavLink>
        <NavLink to='/confirm'>Confirm Payment</NavLink>
        </div>
        <hr className='nav-line'></hr>
    </nav>
  )
}

export default NavBar
