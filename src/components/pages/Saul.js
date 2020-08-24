import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/bblogo.png';
import bcslogo from '../../img/bcs-logo.svg.png';

const Saul = () => {
  return (
    <header className='center'>
      <img className="logo" src={bcslogo} alt='better-call-saul-logo'/>
      <Link to="/"><img className="sm-logo" src={logo} alt='breaking-bad-logo'/></Link>
    </header>
  )
}

export default Saul
