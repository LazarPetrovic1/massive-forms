import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../actions/auth'

const Nav = (props) => {
  const {
    logout,
    auth: { isAuthenticated, loading }
  } = props

  const authLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link className='nav-link text-light' to='/'>Home</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link text-light' to='/asd'>NotFound</Link>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link className='nav-link text-light' to='/register'>Register</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link text-light' to='/login'>Login</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link text-light' to='/asd'>NotFound</Link>
      </li>
    </ul>
  )

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>SomeBrand</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <Fragment>
          {isAuthenticated ? authLinks : guestLinks}
        </Fragment>
      </div>
    </nav>
  )
}

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logout }
)(Nav)
