import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('/auth')

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (e) {
    console.warn(e)
    dispatch({
      type: CLEAR_PROFILE
    })

    dispatch({
      type: AUTH_ERROR
    })
  }
}

export const register = ({
  firstName,
  lastName,
  email,
  sex,
  bio,
  username,
  password,
  city,
  country,
  zip,
  phone,
  question,
  security,
  imageTaken
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    sex,
    bio,
    username,
    password,
    city,
    country,
    zip,
    phone,
    question,
    security,
    imageTaken
  })

  try {
    const res = await axios.post('/users', body, config)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser())
  } catch (e) {
    console.warn(e.response.data.errors)
    dispatch({
      type: REGISTER_FAIL
    })
  }
}

export const login = ({email, username, phone, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let body

  if (email) {
    body = JSON.stringify({ email, password })
  } else if (username) {
    body = JSON.stringify({ username, password })
  } else if (phone) {
    body = JSON.stringify({ phone, password })
  }

  try {
    const res = await axios.post('/auth', body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser())
  } catch (e) {
    console.warn(e.response.data.errors)
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}
