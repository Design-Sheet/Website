import React from 'react'
import '../asset/Socialmedia.css'
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap'
const Socialmedia = () => {
  return (
    <div className='socialmedia font' style={{ backgroundColor: 'white' }}>
      <h1
        className='socialmedia_title'
        style={{
          paddingBottom: '30px',
          fontFamily: 'Londrina Shadow',
          paddingTop: '40px',
          color: '#7A7490',
          wordSpacing: '10px',
          letterSpacing: '2px',
          fontSize: '50px',
        }}
      >
        Register now to get 2 months
        <br /> free subscription
        <Nav.Link href='https://n6lcpj2e6wu.typeform.com/to/zEFYIK2K'>
          <div>
            <Button
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: 'rgb(62,67,129)',
                borderRadius: '30px 30px ',
                textTransform: 'initial',
              }}
              variant='primary'
            >
              Register
            </Button>
          </div>
        </Nav.Link>
      </h1>
    </div>
  )
}
export default Socialmedia
