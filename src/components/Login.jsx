import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/auth'

function Login (props) {
  const [loginType, setLoginType] = useState('')
  const [viewPass, setViewPass] = useState(false)
  const [data, setData] = useState({
    email: '',
    username: '',
    phone: '',
    password: ''
  })

  const [remember, setRemember] = useState(false)

  const { email, username, phone, password } = data
  const { login, isAuthenticated } = props

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const emailLogin = (
    <div className='darkbackground mt-5 p-5'>
      <div className='form-group'>
        <label htmlFor='email' className='white'>
            E-mail
          </label>
        <input
          type='email'
          className={
              email ? `form-control is-valid` : 'form-control is-invalid'
            }
          value={email}
          name='email'
          placeholder='Please enter your e-mail.'
          onChange={onChange}
          required
          />
      </div>
      <div className='form-group rel'>
        <label htmlFor='password' className='white'>
          Password
        </label>
        <input
          type={viewPass ? 'text' : 'password'}
          name='password'
          className={
              password ? `form-control is-valid` : 'form-control is-invalid'
            }
          value={password}
          onChange={onChange}
          placeholder='Please enter your password.'
          />
        {viewPass ? (
          <i
            className='fas fa-eye-slash abs'
            onClick={() => setViewPass(false)}
            />
          ) : (
            <i
              className='fas fa-eye abs'
              onClick={() => setViewPass(true)}
            />
          )}
      </div>
      <div className='custom-control custom-checkbox'>
        <input
          value={remember}
          onChange={() => setRemember(!remember)}
          type='checkbox'
          className={
            remember
              ? 'custom-control-input is-valid'
              : 'custom-control-input is-invalid'
          }
          name='remember'
          id='remember'
        />
        <label className='custom-control-label' htmlFor='remember'>
          Remember me!
        </label>
      </div>
    </div>
  )

  const usernameLogin = (
    <div className='darkbackground mt-5 p-5'>
      <div className='form-group'>
        <label htmlFor='username' className='white'>
            Username:
          </label>
        <input
          checked={remember}
          type='text'
          className={
              username ? `form-control is-valid` : 'form-control is-invalid'
            }
          value={username}
          name='username'
          placeholder='Please enter your username.'
          onChange={onChange}
          required
          />
      </div>
      <div className='form-group rel'>
        <label htmlFor='password' className='white'>
            Password
          </label>
        <input
          type={viewPass ? 'text' : 'password'}
          name='password'
          className={
              password ? `form-control is-valid` : 'form-control is-invalid'
            }
          value={password}
          onChange={onChange}
          placeholder='Please enter your password.'
          />
        {viewPass ? (
          <i
            className='fas fa-eye-slash abs'
            onClick={() => setViewPass(false)}
            />
          ) : (
            <i
              className='fas fa-eye abs'
              onClick={() => setViewPass(true)}
            />
          )}
      </div>
      <div className='custom-control custom-checkbox'>
        <input
          value={remember}
          onChange={() => setRemember(!remember)}
          type='checkbox'
          checked={remember}
          className={
            remember
              ? 'custom-control-input is-valid'
              : 'custom-control-input is-invalid'
          }
          name='remember'
          id='remember'
        />
        <label className='custom-control-label' htmlFor='remember'>
          Remember me!
        </label>
      </div>
    </div>
  )

  const phoneLogin = (
    <div className='darkbackground mt-5 p-5'>
      <div className='form-group'>
        <label htmlFor='phone' className='white'>
            Your phone number:
          </label>
        <input
          type='phone'
          className={
              phone ? `form-control is-valid` : 'form-control is-invalid'
            }
          value={phone}
          placeholder='Please enter your phone number.'
          name='phone'
          onChange={onChange}
          required
          />
      </div>
      <div className='form-group rel'>
        <label htmlFor='password' className='white'>
            Password
          </label>
        <input
          type={viewPass ? 'text' : 'password'}
          name='password'
          className={
              password ? `form-control is-valid` : 'form-control is-invalid'
            }
          value={password}
          onChange={onChange}
          placeholder='Please enter your password.'
          />
        {viewPass ? (
          <i
            className='fas fa-eye-slash abs'
            onClick={() => setViewPass(false)}
            />
          ) : (
            <i
              className='fas fa-eye abs'
              onClick={() => setViewPass(true)}
            />
          )}
      </div>
      <div className='custom-control custom-checkbox'>
        <input
          value={remember}
          onChange={() => setRemember(!remember)}
          type='checkbox'
          className={
            remember
              ? 'custom-control-input is-valid'
              : 'custom-control-input is-invalid'
          }
          checked={remember}
          name='remember'
          id='remember'
        />
        <label className='custom-control-label' htmlFor='remember'>
          Remember me!
        </label>
      </div>
    </div>
  )

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    login({ email, username, phone, password })
    setData({
      email: '',
      username: '',
      phone: '',
      password: ''
    })
  }

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div className='container'>
      <div className='pop-up bg-info'>
        <h2 className='bg-primary text-light py-4'><b>Please, choose your login method:</b></h2>
        <div className='flexer'>
          <div className='custom-control custom-radio bg' onClick={() => setLoginType('email')}>
            <i className='fas fa-envelope fa-5x mb-4 white' />
            <p className='lead white'>Log in using e-mail.</p>
          </div>
          <div className='custom-control custom-radio bg' onClick={() => setLoginType('username')}>
            <i className='fas fa-user-tag fa-5x mb-4 white' />
            <p className='lead white'>Log in with a username.</p>
          </div>
          <div className='custom-control custom-radio bg' onClick={() => setLoginType('phone')}>
            <i className='fas fa-mobile-alt fa-5x mb-4 white' />
            <p className='lead white'>Log in with a phone number.</p>
          </div>
        </div>
      </div>

      {loginType && (
        <h2 className='darkbackground py-3 text-light text-center mt-4'>
          <b>Login with {loginType}</b>
        </h2>
      )}

      <form onSubmit={onSubmit}>
        {loginType === 'email' && emailLogin}
        {loginType === 'username' && usernameLogin}
        {loginType === 'phone' && phoneLogin}
        {loginType && (
          <button
            type='submit'
            className='btn btn-primary btn-block btn-lg'
          >
            <i className='fas fa-door-open' />&nbsp;&nbsp;Log me in!
          </button>
        )}
      </form>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { login }
)(Login)

// {loginType ? (
//   <button
//     className='btn btn-lg btn-info'
//     onClick={() => setLoginType('')}
//         >
//           Choose a different login type&nbsp;&nbsp;
//           <i className='fas fa-undo' />
//   </button>
// ) : ()}
