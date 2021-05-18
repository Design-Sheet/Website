import React from 'react'
import '../asset/Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer-distributed footer">

			    <div className="footer-left">

                    <div >
                    <img className="img3" src="./images/DF@1X.png"></img>
                    <img className="img4" src="./images/DesignSheets@2X.png"></img>
                    </div>
                    
                    <p className="footer_links ">
                        <a className="word_spacing" href="">How it works </a>
                        <a href="">Features</a>{``}
                        <a href="">About</a>
                        <a href="">Careers</a>
                        <a href="">Contact us:info@designsheets.com</a>
                    </p>
                    
                   
                
                    <p className="footer-company-name">© 2021 This page is protected by reCAPTCHA and is subject to the{' '}<span className="white">Google Privacy Policy </span> and </p>
                    <p className=' white'>Terms of services</p>
{/* 
                    <div className="footer-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>
                    </div> */}

			    </div>

                <div className="footer-right">

                   

                   
                </div>
		    </footer>
        </>
    )
}

export default Footer




