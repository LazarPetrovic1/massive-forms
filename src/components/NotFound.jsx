import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div id='notfound' style={{backgroundColor: 'rgba(17, 17, 17, 0.75)'}}>
    <div className='notfound'>
      <div className='notfound-404'>
        <h1 className='white'>4<span />4</h1>
      </div>
      <h2>Oops! Page Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
      <Link to='/'>Back to homepage</Link>
    </div>
  </div>
)

export default NotFound
