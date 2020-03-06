import React, { useState, Fragment, useEffect, useRef } from 'react'
import countries from '../utils/countries.js'
import Camera from './Camera'

const Register = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    country: '',
    zip: '',
    email: '',
    security: '',
    password: '',
    password2: '',
    phone: '',
    callcode: ''
  })

  const [viewPass, setViewPass] = useState(false)
  const [viewPass2, setViewPass2] = useState(false)
  const [check, setcheck] = useState(false)
  const [progress, setProgress] = useState(0)
  const [image, setImage] = useState(null)

  const {
    firstName,
    lastName,
    username,
    city,
    country,
    zip,
    email,
    security,
    password,
    password2,
    phone,
    callcode
  } = data

  const onChange = e => {
    e.persist()
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault()

    console.log({
      firstName,
      lastName,
      email,
      password,
      password2,
      username,
      city,
      country,
      zip,
      security,
      phone
    })
  }

  useEffect(() => {
    (function () {
      if (country) {
        const callcode = countries.filter(ctry => ctry.name === country)
        setData({ ...data, callcode: callcode[0].callcode })
      }
    }())
  }, [country])

  const onProgressChange = val => {
    let newValue = progress + val
    if (newValue > 100) {
      newValue = 100
    } else if (newValue < 0) {
      newValue = 0
    }
    setProgress(newValue)
  }

  return (
    <Fragment>
      <div
        id='carouselExampleIndicators'
        className='carousel slide high pt-4 darkbackground'
        data-interval='false'
      >
        <div className='container text-center'>
          <ol
            className='carousel-indicators'
            style={{ backgroundColor: '#bbb', bottom: '6rem' }}
          >
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              className='active'
              onClick={() => setProgress(0)}
            />
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='1'
              onClick={() => setProgress(17)}
            />
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='2'
              onClick={() => setProgress(34)}
            />
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='3'
              onClick={() => setProgress(51)}
            />
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='4'
              onClick={() => setProgress(68)}
            />
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='5'
              onClick={() => setProgress(85)}
            />
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='6'
              onClick={() => setProgress(100)}
            />
          </ol>
          <div className='carousel-inner'>
            <div className='progress mx-2'>
              <div
                className='progress-bar progress-bar-striped bg-success progress-bar-animated'
                role='progressbar'
                style={{ width: `${progress}%` }}
              />
            </div>
            <form onSubmit={onSubmit}>
              <div className='carousel-item active'>
                <div className='w-75 h-100 m-auto'>
                  <div style={{ marginTop: '25%' }}>
                    <h2 className='mb-2'>Your basic personal information</h2>
                    <label htmlFor='firstName'>First name</label>
                    <input
                      type='text'
                      onChange={onChange}
                      name='firstName'
                      value={firstName}
                      className={
                        firstName
                          ? `form-control is-valid`
                          : 'form-control is-invalid'
                      }
                      required
                    />
                    {firstName ? (
                      <div className='valid-feedback'>Looks good!</div>
                    ) : (
                      <div className='invalid-feedback'>
                        Please enter your name.
                      </div>
                    )}
                    <label htmlFor='lastName'>Last name</label>
                    <input
                      type='text'
                      className={
                        lastName
                          ? `form-control is-valid`
                          : 'form-control is-invalid'
                      }
                      value={lastName}
                      name='lastName'
                      onChange={onChange}
                      required
                    />
                    {lastName ? (
                      <div className='valid-feedback'>Looks good!</div>
                    ) : (
                      <div className='invalid-feedback'>
                        Please enter your name.
                      </div>
                    )}
                    <label htmlFor='email'>E-mail</label>
                    <input
                      type='email'
                      className={
                        email
                          ? `form-control is-valid`
                          : 'form-control is-invalid'
                      }
                      value={email}
                      name='email'
                      onChange={onChange}
                      required
                    />
                    {email ? (
                      <div className='valid-feedback'>Looks good!</div>
                    ) : (
                      <div className='invalid-feedback'>
                        Please enter your e-mail address.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='w-75 h-100 m-auto'>
                  <div style={{ marginTop: '25%' }}>
                    <h2 className='mb-2'>Your basic profile information</h2>
                    <label htmlFor='username'>Username</label>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span
                          className='input-group-text'
                          id='inputGroupPrepend3'
                        >
                          @
                        </span>
                      </div>
                      <input
                        type='text'
                        className={
                          username.length > 2
                            ? `form-control is-valid`
                            : 'form-control is-invalid'
                        }
                        name='username'
                        onChange={onChange}
                        value={username}
                        required
                      />
                      {username.length > 2 ? (
                        <div className='valid-feedback'>Looks good!</div>
                      ) : (
                        <div className='invalid-feedback'>
                          Please enter your username.
                        </div>
                      )}
                    </div>
                    <div className='form-group rel'>
                      <label htmlFor='password'>Password</label>
                      <input
                        type={viewPass ? 'text' : 'password'}
                        name='password'
                        className={
                          password.length > 5
                            ? `form-control is-valid`
                            : 'form-control is-invalid'
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
                      {password.length > 2 ? (
                        <div className='valid-feedback'>Looks good!</div>
                      ) : (
                        <div className='invalid-feedback'>
                          Please enter your name.
                        </div>
                      )}
                    </div>
                    <div className='form-group rel'>
                      <label htmlFor='password2'>Password</label>
                      <input
                        type={viewPass2 ? 'text' : 'password'}
                        name='password2'
                        className={
                          password2.length >= 5 &&
                          password2.toString() === password.toString()
                            ? `form-control is-valid`
                            : 'form-control is-invalid'
                        }
                        value={password2}
                        onChange={onChange}
                        placeholder='Please enter your password.'
                      />
                      {viewPass2 ? (
                        <i
                          className='fas fa-eye-slash abs'
                          onClick={() => setViewPass2(false)}
                        />
                      ) : (
                        <i
                          className='fas fa-eye abs'
                          onClick={() => setViewPass2(true)}
                        />
                      )}
                      {password2.length >= 5 && password2 === password ? (
                        <div className='valid-feedback'>Looks good!</div>
                      ) : (
                        <div className='invalid-feedback'>
                          Password not confirmed.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='w-75 h-100 m-auto'>
                  <div style={{ marginTop: '25%' }}>
                    <h2 className='mb-2'>Advanced personal information</h2>
                    <label htmlFor='city'>City</label>
                    <input
                      type='text'
                      className={
                        city
                          ? `form-control is-valid`
                          : 'form-control is-invalid'
                      }
                      value={city}
                      name='city'
                      onChange={onChange}
                      required
                    />
                    {city ? (
                      <div className='valid-feedback'>Looks good!</div>
                    ) : (
                      <div className='invalid-feedback'>
                        Please enter your city
                      </div>
                    )}
                    <label htmlFor='country'>Country</label>
                    <select
                      onChange={onChange}
                      name='country'
                      value={country}
                      className={
                        country
                          ? 'form-control is-valid'
                          : 'form-control is-invalid'
                      }
                      required
                    >
                      <option value=''>-- Choose one --</option>
                      {countries.map(country => (
                        <option value={country.name} key={country.capital}>
                          {country.name} (pop.{' '}
                          {(country.population / 1000000).toFixed(2)}M)
                        </option>
                      ))}
                    </select>
                    {country ? (
                      <div className='valid-feedback'>Looks good!</div>
                    ) : (
                      <div className='invalid-feedback'>
                        Please select your country
                      </div>
                    )}
                    <label htmlFor='zip'>Zip Code</label>
                    <input
                      type='text'
                      name='zip'
                      onChange={onChange}
                      className={
                        zip
                          ? `form-control is-valid`
                          : 'form-control is-invalid'
                      }
                      value={zip}
                      required
                    />
                    {zip ? (
                      <div className='valid-feedback'>Looks good!</div>
                    ) : (
                      <div className='invalid-feedback'>
                        Please enter your zip code
                      </div>
                    )}
                    <div className='input-group mt-3'>
                      <div className='input-group-prepend'>
                        <span
                          className='input-group-text'
                          id='inputGroupPrepend4'
                        >
                          {callcode ? callcode : ':/'}
                        </span>
                      </div>
                      <input
                        type='text'
                        className={
                          phone
                            ? `form-control is-valid`
                            : 'form-control is-invalid'
                        }
                        name='phone'
                        onChange={onChange}
                        value={phone}
                        required
                      />
                      {phone ? (
                        <div className='valid-feedback'>Looks good!</div>
                      ) : (
                        <div className='invalid-feedback'>
                          Please enter your phone number.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='w-75 h-100 m-auto'>
                  <div style={{ marginTop: '10%' }}>
                    <article
                      className='container-md scroller'
                      style={{ userSelect: 'none' }}
                    >
                      <h2>License, terms and conditions</h2>
                      <p className='lead'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellendus architecto ipsum eaque sit,
                        consectetur a laborum quod autem deserunt amet qui
                        accusamus facilis nam nesciunt beatae quas esse officiis
                        officia, maxime natus harum unde ullam. Ducimus aliquam
                        iusto laboriosam deserunt similique voluptate expedita
                        inventore, voluptas impedit, aut rem deleniti molestias!
                        Maiores recusandae consectetur magni libero amet saepe
                        hic alias! Eligendi iste fugiat similique, dolorem
                        reiciendis assumenda rem modi, quas ab veniam eveniet
                        laboriosam voluptatem culpa vero impedit! Nobis eligendi
                        magni, animi neque autem perferendis pariatur saepe ad
                        rerum possimus ea asperiores aut, distinctio maxime illo
                        provident est ut eum, fugiat ipsam itaque eveniet.
                        Reiciendis incidunt, ea dolore molestias, quia tempore
                        ab neque fugiat voluptas quas alias iure ipsum
                        asperiores. Ab amet optio aliquid! Iste odit debitis at
                        quod velit, corporis facilis maxime, temporibus earum
                        similique delectus inventore deserunt ipsum hic. Maxime
                        porro minima, molestiae optio hic eum quidem saepe
                        reiciendis necessitatibus quia ducimus quibusdam iure
                        itaque rerum dolores ipsum vitae pariatur eligendi,
                        repellat culpa laudantium delectus nesciunt fugit
                        maiores. Quo tenetur, dicta vero voluptate rerum ratione
                        doloribus veniam dolor autem quis aliquid mollitia,
                        laborum blanditiis molestias. Incidunt voluptatem, esse
                        veniam voluptas aliquam officiis beatae provident? Enim
                        architecto, natus corporis doloremque non doloribus
                        veniam illo minima. Iste aliquid facere dolorum
                        adipisci, quis nisi ullam veniam ipsa expedita animi
                        atque quae quibusdam doloremque, eaque corporis quam
                        veritatis assumenda voluptatem. Cum tenetur dolorum unde
                        nemo, soluta obcaecati laborum repellendus nobis quasi
                        aut harum consequatur, quas! Harum eveniet tempora
                        numquam natus ab tempore ducimus.
                      </p>
                      <p className='display-3'>
                        You have to agree before you can create an account.
                      </p>
                    </article>
                    <div className='custom-control custom-checkbox'>
                      <input
                        value={check}
                        onChange={() => setcheck(!check)}
                        type='checkbox'
                        className={
                          check
                            ? 'custom-control-input is-valid'
                            : 'custom-control-input is-invalid'
                        }
                        name='check'
                        id='check'
                        required
                      />
                      <label className='custom-control-label' htmlFor='check'>
                        I agree with the terms and conditions
                      </label>
                    </div>
                    <div
                      className={
                        check ? 'valid-feedback d-block' : 'invalid-feedback'
                      }
                    >
                      {check
                        ? 'Looks good!'
                        : 'You must agree before submitting.'}
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='w-75 h-100 m-auto'>
                  <div style={{ marginTop: '30%' }}>
                    <h2>Add a security answer</h2>
                    <p className='lead'>
                      What is/was the full name of one of your parents?
                    </p>
                    <label htmlFor='security'>Answer</label>
                    <input
                      type='text'
                      name='security'
                      onChange={onChange}
                      className={
                        security
                          ? `form-control is-valid`
                          : 'form-control is-invalid'
                      }
                      value={security}
                      required
                    />
                    {security ? (
                      <div className='valid-feedback'>Looks good!</div>
                    ) : (
                      <div className='invalid-feedback'>
                        Please provide an answer to the question.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='w-75 h-100 m-auto'>
                  <article style={{marginTop: '2rem'}}>
                    <h2 style={{ marginBottom: '1rem' }}>
                      Please take a picture of yourself for additional security (<b>compeletely optional</b>)
                    </h2>
                    <Camera onCapture={(blob) => setImage(blob)} onClear={() => setImage(null)} />
                    <small className='d-block bg-light lead text-secondary mt-4'>
                      Please note that this image will be discarded after the
                      registration process
                    </small>
                  </article>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='w-75 h-100 m-auto'>
                  <div style={{ marginTop: '20%' }}>
                    <h2 style={{ marginBottom: '2rem' }}>
                      Overview of your information:
                    </h2>
                    <ul className='list-group' style={{ marginBottom: '2rem' }}>
                      <li className='list-group-item list-group-item-action'>
                        Name: {firstName && lastName ? (
                          <span className='text-success'>{firstName} {lastName}</span>
                        ) : (
                          <span className='text-danger'>No name given.</span>
                        )}
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        E-mail: {email ? (
                          <span className='text-success'>{email}</span>
                        ) : (
                          <span className='text-danger'>No e-mail given.</span>
                        )}
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Username: {username ? (
                          <span className='text-success'>@{username}</span>
                        ) : (
                          <span className='text-danger'>No username is currently set.</span>
                        )}
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        From:{' '}
                        {zip && city && country ? (
                          <span className='text-success'>{zip} - {city}, {country}</span>
                        ) : (
                          <span className='text-danger'>No location set.</span>
                        )}
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Security question: {security ? (
                          <span className='text-success'>{security}</span>
                        ) : (
                          <span className='text-danger'>No answer given.</span>
                        )}
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Image taken for security:&nbsp;&nbsp;{image ? <span className='text-success'>yes</span> : <span className='text-danger'>no</span>}
                      </li>
                      <li className='list-group-item list-group-item-action'>
                        Your phone number: {phone ? (
                          <span className='text-success'>{callcode}{phone}</span>
                        ) : (
                          <span className='text-danger'>No phone number was given</span>
                        )}
                      </li>
                    </ul>
                    <input
                      type='submit'
                      value='Sign me up!'
                      disabled={
                        !firstName ||
                        !lastName ||
                        !username ||
                        !city ||
                        !country ||
                        !zip ||
                        !email ||
                        !security ||
                        !password ||
                        !password2 ||
                        !phone
                      }
                      className='btn btn-lg btn-primary btn-block'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          {progress > 0 && (
            <a
              className='carousel-control-prev'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='prev'
              onClick={() => onProgressChange(-17)}
            >
              <span
                className='carousel-control-prev-icon text-primary'
                aria-hidden='true'
              />
              <span className='sr-only'>Previous</span>
            </a>
          )}
          {progress < 100 && (
            <a
              className='carousel-control-next'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='next'
              onClick={() => onProgressChange(17)}
            >
              <span
                className='carousel-control-next-icon text-primary'
                aria-hidden='true'
              />
              <span className='sr-only'>Next</span>
            </a>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Register