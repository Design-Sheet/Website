import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../asset/Header.css'
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap'

const Header = () => {
  return (
    <div className='nav_dimension'>
      <Navbar
        fixed='top'
        className='pt-0 pb-0  nav_color position '
        collapseOnSelect
        expand='md'
        variant='light'
      >
        <Navbar.Brand href='#home'>
          <Link to='/'>
            <img className='img1' src='./images/logoblue@1X.png' alt=''></img>
            <img
              className='img2'
              src='./images/DesignSheets@1X.png'
              alt=''
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav>
            <Nav.Link href='/#how-it-works' className='text-color '>
              <div className='hover'>How it works</div>
            </Nav.Link>
            <Nav.Link href='/feature' className='text-color'>
              <div className='hover shadow-box-example hoverable '>
                Features
              </div>
            </Nav.Link>
            <Nav.Link href='/career' className='text-color'>
              <div className='hover'>About</div>
            </Nav.Link>
            <Nav.Link href='/career1' className='text-color'>
              <div className='hover'>Careers</div>
            </Nav.Link>
            <Nav.Link href='https://n6lcpj2e6wu.typeform.com/to/zEFYIK2K'>
              <Button size="sm"
                style={{
                  fontSize: '17px',
                  fontWeight: 'bold',
                  color: 'rgb(62,67,129)',
                  backgroundColor: 'white',
                  borderRadius: '30px 30px ',
                  border: '1px solid rgb(62,67,129)',
                  textTransform: 'initial',
                }}
                variant='primary'
              >
                Register
              </Button>
              {/* <div className='hover'>Register</div> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
