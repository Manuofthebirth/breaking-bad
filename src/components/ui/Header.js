import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/bblogo.png';
import bcslogo from '../../img/bcs-logo.svg.png';

const Header = () => {
  return (
    <header className='center'>
      <img className="logo" src={logo} alt='breaking-bad-logo'/>
      <Link to="/saul"><img className="sm-logo" src={bcslogo} alt='better-call-saul-logo'/></Link>
    </header>
  )
}

export default Header
