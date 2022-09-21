import React from 'react';
import './Navbar.css'

function Navbar() {
  const greeting = 'I´m The NAVBAR';
  return (
    <>
      <h1 className='TitleNavBar'>{greeting}</h1>
    </>
  );
}

export default Navbar;
