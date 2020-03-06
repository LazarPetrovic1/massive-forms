import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <ul className='nav_ul'>
    <li className='nav_li'>
      <Link to='/'>Home</Link>
    </li>
    <li className='nav_li'>
      <Link to='/register'>Register</Link>
    </li>
    <li className='nav_li'>
      <Link to='/asd'>NotFound</Link>
    </li>
  </ul>
)

export default Nav
