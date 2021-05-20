import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Socialmedia from '../components/Socialmedia'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import '../asset/CareerScreen.css'
import Review from '../components/Review'

const CareerScreen = () => {
  return (
    <div className=''>
      <Header />
      <div className='important_background'>
        <Row className='section1  important_background'>
          <Col lg={5} sm={9} xs={9} className=' mt-5 mx-auto my-auto pt-5 pb-5'>
            <Image src='./images/preview@1X.png' fluid />
          </Col>
          <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
            <ListGroup>
              <h3 className='width1'>What we belive</h3>
              <p
                className='width2'
                style={{ textAlign: 'center', fontSize: '1.2rem' }}
              >
                {' '}
                A revolutionary innovation, a new medium for sheet design that
                is more effective and innovative, attempting to solve challenges
                through technology and imagination, tools development at every
                possible opportunity, and maximizing the productivity at the
                expense of our software.
              </p>
            </ListGroup>
          </Col>
          <Col xl={1} md={0} lg={0} sm={0}></Col>
        </Row>

        <Row className='section2 background_color '>
          <Col className='mx-auto mt-5 pt-5 pb-3 mx-auto my-auto width1 '>
            <p>Our Values</p>
          </Col>
        </Row>
        <Row
          className='section3 background_color px-auto imortant_background'
          style={{ textAlign: 'center' }}
        >
          <Col>
          <div className='b'>
          <Image
              src='./images/statistics.png'
              className=' background_image'
            ></Image>
          </div>
            
            <br />
            <p>EFFICIENT</p>
          </Col>
          <Col>
            <Image
              src='./images/clock.png'
              className='background_image'
              style={{ zIndex: '20' }}
            ></Image>
            <p>TIME SAVER</p>
          </Col>
          <Col>
            <Image
              src='./images/rocket.png'
              className='background_image'
            ></Image>
            <p>INNOVATIVE</p>
          </Col>
          <Col>
            <Image
              src='./images/high-five.png'
              className='background_image'
            ></Image>
            <p>USER FRIENDLY</p>
          </Col>
          <Col>
            <Image src='./images/1.png' className='background_image'></Image>
            <p>CREATIVE</p>
          </Col>
          <br />
        </Row>
      </div>
      <Review />
      <Socialmedia />
      <Footer />
    </div>
  )
}

export default CareerScreen
