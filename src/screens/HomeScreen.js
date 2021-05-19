import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Review from '../components/Review'
import Blank from '../components/blank'
import Reg from '../components/register'
import New from '../components/new'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import '../asset/CareerScreen.css'
import Socialmedia from '../components/Socialmedia'
import '../asset/HomeScreen.css'
import '../asset/Review.css'
import '../asset/CareerScreen.css'
import { HashLink as Link } from 'react-router-hash-link'

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Row className='section1 background_color important_background'>
        <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
          <ListGroup>
            <h3 className='width1' style={{ textAlign: 'left' }}>
              No more
              <br />
              compromising with
              <br />
              your presentation
              <br />
              sheets.{' '}
            </h3>
            <p
              className='width2'
              style={{ textAlign: 'center', marginLeft: '8%' }}
            >
              {' '}
              Design the best presentation sheets within the least time.
            </p>
          </ListGroup>
        </Col>
        <Col lg={5} sm={9} xs={9} className=' mt-5 mx-auto my-auto pt-5 pb-5'>
          <Image
            src='./images/3d-art-digital-illustration.jpg.pagespeed.ce.HOe3qqiaTN (1).png'
            fluid
          />
        </Col>
        <Col xl={1} md={0} lg={0} sm={0}></Col>
      </Row>
      <div
        className='section1 background_color'
        style={{ textAlign: 'center', padding: '2% 0%' }}
      >
        <p className='width2' style={{ textAlign: 'center' }}>
          {' '}
          Here we present you the
        </p>
        <h3 className='width1'> DesignSheets</h3>
        <p className='width2' style={{ textAlign: 'center' }}>
          {' '}
          A web-based design tool, which helps you design the best professional
          <br />
          presentation sheets easily and within the least time ever.
        </p>
      </div>
      <New />
      <div
        className='how-it-works'
        style={{ textAlign: 'center', padding: '2% 0%' }}
        id='how-it-works'
      >
        <h3 className='width1'>How it works</h3>
        {/* <p className='width2' style={{ textAlign: 'center' }}>
          {' '}
          Explore photos, patterns, colors and gradients designed by the
          <br />
          best designers or simply use yours.
        </p> */}
        <video width='65%' height='56%' controls>
          <source src='./images/how it.mp4' type='video/ogg' />
        </video>
        <br />
      </div>
      <div className='carousel'>
        <h3 className='width1'>How DesignSheets helps you?</h3>
        <Row>
          <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
            <ListGroup>
              <h4 className='width1'>Time saving</h4>
              <div className='width2' style={{ textAlign: 'center' }}>
                {' '}
                You can design your sheet/posters within
                <br />
                30-40 min using templates{' '}
              </div>
            </ListGroup>
          </Col>
          <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
            <ListGroup>
              <h4 className='width1'>Best sheets</h4>
              <div className='width2' style={{ textAlign: 'center' }}>
                {' '}
                You can now design the best
                <br />
                presentation sheets/posters on your own,
                <br />
                no need to have pro skills to design the best
              </div>
            </ListGroup>
          </Col>
          <Col xl={1} md={0} lg={0} sm={0}></Col>
        </Row>
        <Row>
          <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
            <ListGroup>
              <h4 className='width1'>Sheet layout</h4>
              <div className='width2' style={{ textAlign: 'center' }}>
                {' '}
                We provide you the idea and layout to
                <br />
                design sheets/poster through templates
              </div>
            </ListGroup>
          </Col>
          <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
            <ListGroup>
              <h4 className='width1'>User friendly</h4>
              <div className='width2' style={{ textAlign: 'center' }}>
                {' '}
                The simplest powerful tool ever,
                <br />
                completely easy to use, no need of prior
                <br />
                software knowledge
              </div>
            </ListGroup>
          </Col>
          <Col xl={1} md={0} lg={0} sm={0}></Col>
        </Row>
        <Row>
          <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
            <ListGroup>
              <h4 className='width1'>Team Work</h4>
              <div className='width2' style={{ textAlign: 'center' }}>
                {' '}
                No more passing on the files, all your team
                <br />
                members can design together
              </div>
            </ListGroup>
          </Col>
          <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
            <ListGroup>
              <h4 className='width1' style={{ textAlign: 'center' }}>
                Affordable
              </h4>
              <div className='width2' style={{ textAlign: 'center' }}>
                {' '}
                The least price ever, everyone from
                <br />
                student to professional can afford easily{' '}
              </div>
            </ListGroup>
          </Col>
          <Col xl={1} md={0} lg={0} sm={0}></Col>
        </Row>
      </div>
      <Reg />

      <Review />

      <Blank />
      <Socialmedia />

      <Footer />
    </div>
  )
}

export default HomeScreen
