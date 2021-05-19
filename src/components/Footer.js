import React from 'react'
import '../asset/Footer.css'
import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {
  return (
    <>
      <footer className='footer-distributed footer'>
        <div className='footer-left'>
          <div>
            <img className='img3' src='./images/DF@1X.png'></img>
            <img className='img4' src='./images/DesignSheets@2X.png'></img>
          </div>

          <p className='footer_links '>
            <Link to='#how-it-works'>How it works </Link>
            <a className='word_spacing' href=''></a>
            <a href='/feature'>Features</a>
            {``}
            <a href='/career'>About</a>
            <a href='/career1'>Careers</a>
            <a href='https://www.info@designsheets.net/'>
              Contact us:info@designsheets.net
            </a>
          </p>

          <p className='footer-company-name'>
            © 2021 This page is protected by reCAPTCHA and is subject to the{' '}
            <span className='white'>Google Privacy Policy </span> and{' '}
          </p>
          <p className=' white'>Terms of services</p>
          {/* 
                    <div className="footer-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>
                    </div> */}
        </div>

        <div className='footer-right'></div>
      </footer>
    </>
  )
}

export default Footer
