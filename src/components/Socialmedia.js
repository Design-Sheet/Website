import React from 'react'
import '../asset/Socialmedia.css'

const Socialmedia = () => {
  return (
    <div className='socialmedia important_background'>
      <h3 className='socialmedia_title '>Follow us to get latest updates</h3>
      <div className='socialmedia_icon'>
        <a href='https://www.facebook.com/DesignSheets-105982988316710'>
          {' '}
          <img src='./images/facebook_icon.png' alt=''></img>
        </a>
        <a href='https://www.linkedin.com/company/designsheets'>
          {' '}
          <img src='./images/linkedin_icon.png' alt=''></img>{' '}
        </a>
        <a href='https://www.instagram.com/design.sheets/'>
          <img src='./images/instagram@1X.png' alt=''></img>{' '}
        </a>
      </div>
    </div>
  )
}
export default Socialmedia
