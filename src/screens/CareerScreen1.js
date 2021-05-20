import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Socialmedia from '../components/Socialmedia'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import '../asset/CareerScreen.css'
import Review from '../components/Review'
import { Link } from 'react-router-dom'
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap'

const CareerScreen1 = () => {
  return (
    <div className='' style={{border:"2px solid balck"}}>
      <Header />

      <Row className='section1 background_color important_background'>
        <Col lg={5} sm={9} xs={9} className=' mt-5 mx-auto my-auto pt-5 pb-5'>
          <Image src='./images/xyz.png' fluid />
        </Col>
        <Col lg={4} sm={9} xs={9} className='mx-auto my-auto mt-5 pt-5'>
          <ListGroup>
            <h3 className='width1'>Our mission</h3>
            <p className='width2' style={{ textAlign: 'center' ,fontSize:"1.2rem" }}>
              {' '}
              We are a group of IITians, eager to solve problems with our
              technological focus and prowers. Our thirst for a better world is
              what drives us to come up with such solutions and ventures. We
              believe its worth the risk, since the potential products that
              could be created have the capability to redefine our world. <br />
              <br />
              We are open to welcome like minded passionate people driven by
              technology into our team.
            </p>
          </ListGroup>
        </Col>
        <Col xl={1} md={0} lg={0} sm={0}></Col>
        <br />
        <h3 className='width1' style={{ marginBottom: '3%' }}>
          Come experience working with us!{' '}
          <Nav.Link
            href='https://n6lcpj2e6wu.typeform.com/to/zEFYIK2K'
            className='text-color '
          >
            <div
              style={{ fontSize: '16px', fontWeight: 'bold', color: '#2f2651' }}
            >
              Register
            </div>
          </Nav.Link>
        </h3>
      </Row>
      <Review />
      <Socialmedia />

      <Footer />
    </div>
  )
}

export default CareerScreen1
