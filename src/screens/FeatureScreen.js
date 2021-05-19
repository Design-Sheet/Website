import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Socialmedia from '../components/Socialmedia'
import { Row, Col, Image } from 'react-bootstrap'
import '../asset/FeatureScreen.css'

const FeatureScreen = () => {
  return (
    <div className='important_background'>
      <Header />
      <Row className='background_color feature important_background'>
        <Col
          lg={4}
          md={5}
          sm={8}
          xs={10}
          className=' mt-5 mx-auto my-auto px-auto pt-5 pb-5'
          fluid
        >
          <Image src='./images/Features@1X.png' fluid></Image>
        </Col>
      </Row>
      <Row className='title'>
        <p>Features Will be disclosed soon</p>
      </Row>

      <Socialmedia />
      <Footer />
    </div>
  )
}

export default FeatureScreen
