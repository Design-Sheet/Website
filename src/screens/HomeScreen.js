import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Review from '../components/Review'
import Blank from '../components/blank'
import Reg from '../components/register'
import New from '../components/new'
import { Nav, Button, Row, Col, Image, ListGroup } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
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
              Wished for a fast easy
              <br />
              way to make professional
              <br />
              presentation sheets?
              <br />
            </h3>
            <p className='width2' style={{ textAlign: 'left' }}>
              {' '}
              Complement your presentation with the best sheets made in a jiffy.
            </p>
            <Nav.Link href='https://n6lcpj2e6wu.typeform.com/to/zEFYIK2K'>
              <div style={{ marginLeft: '-5%' }}>
                <Button
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'rgb(62,67,129)',
                    backgroundColor: 'white',
                    borderRadius: '30px 30px ',
                    border: '1px solid rgb(62,67,129)',
                  }}
                  variant='primary'
                >
                  Register
                </Button>
              </div>
            </Nav.Link>
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
          we present
        </p>
        <h3 className='width1'> DesignSheets</h3>
        <p className='width2' style={{ textAlign: 'center' }}>
          {' '}
          A web-based design tool, which helps you design professional
          <br />
          presentation sheets instantly.{' '}
        </p>
      </div>
      <New />
      <div
        className='how-it-works important_background'
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
        <h3 className='width1'>How DesignSheets help you?</h3>
        <Row>
          <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
            <ListGroup>
              <h4 className='width1'>
                <Image
                  src='./images/back-in-time.png'
                  style={{
                    width: '50px',
                    height: '50px',
                    marginRight: '10px',
                    marginTop: '-10px',
                  }}
                ></Image>
                Time saving
              </h4>
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
              <h4 className='width1 before_icon'>
                <Image
                  src='./images/best-seller.png'
                  style={{
                    width: '55px',
                    height: '55px',
                    marginRight: '10px',
                    marginTop: '-10px',
                  }}
                ></Image>
                Best sheets
              </h4>
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
              <h4 className='width1'>
                <Image
                  src='./images/layout.png'
                  style={{
                    width: '45px',
                    height: '45px',
                    marginRight: '10px',
                    marginTop: '-10px',
                  }}
                ></Image>
                Sheet layout
              </h4>
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
              <h4 className='width1'>
                <Image
                  src='./images/high-five (1).png'
                  style={{
                    width: '55px',
                    height: '55px',
                    marginRight: '10px',
                    marginTop: '-26px',
                  }}
                ></Image>
                User friendly
              </h4>
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
              <h4 className='width1'>
                <Image
                  src='./images/network.png'
                  style={{
                    width: '50px',
                    height: '50px',
                    marginRight: '10px',
                    marginTop: '-10px',
                  }}
                ></Image>
                Team Work
              </h4>
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
                <Image
                  src='./images/money-exchange.png'
                  style={{
                    width: '55px',
                    height: '55px',
                    marginRight: '10px',
                    marginTop: '-10px',
                  }}
                ></Image>
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
      <Reg />
      <div className='important_background'>
        <div className='star '>
          <p style={{ paddingTop: '30px' }}>How exciting is this software?</p>
          <div className='star star1'>
            <ReactStars
              count={5}
              size={50}
              value={0}
              edit={true}
              half={true}
              activeColor='#ffd700'
            />
          </div>
        </div>
      </div>

      <Socialmedia />

      <Footer />
    </div>
  )
}

export default HomeScreen
