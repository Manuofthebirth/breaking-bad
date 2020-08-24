import React from 'react'
import logo from '../../img/bblogo.png'
import bcslogo from '../../img/bcs-logo.svg.png'

const Saul = () => {
  return (
    <header className='center'>
      <img className="logo" src={bcslogo} alt='better-call-saul-logo'/>
      <img className="sm-logo" src={logo} alt='breaking-bad-logo'/>
    </header>
  )
}

export default Saul
