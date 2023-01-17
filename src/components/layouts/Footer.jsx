import React from 'react'

import { FaFigma, FaGithub, FaLinkedin, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

import BgFooter from '../../assets/img/background-footer.png'

function Footer ()  {
  return (
    <footer>
      {/* <img src={BgFooter} alt="Imagen espacio"/> */}
      <div className='information'>
        <div className='icons'><FaFigma/> <FaGithub/> <FaLinkedin/> <FaInstagram/> <FaTelegramPlane/></div>
        <div className='author'>
          <h2>Angela Díaz</h2>
          <p>© Copyright 2021 | All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
