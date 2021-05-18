import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../asset/Review.css'
import {Row,Col,Image, ListGroup} from 'react-bootstrap'
import '../asset/CareerScreen.css'


const Review = () => {
    return (
      <div className='carousel'>
          <h3 className='width1'>Take a look at the software</h3>
          <Row>
                 <Col lg={5} sm={9} xs={9} className=" mt-5 mx-auto my-auto pt-5 pb-5">
                    <Image  src='./images/V1.png' fluid/>
                 </Col>
                 <Col lg={4} sm={9} xs={9} className="mx-auto my-auto mt-5 pt-5">
                    <ListGroup>
                    <h4 className='width1'>We provide services for </h4>
                    <div className="width2" style={{textAlign:'center'}}> All the design fields including:<br/>Architecture, Planning, Interior Design, Landscape, Graphic Design and Product Design.</div>
                    </ListGroup>
                 </Col>
                 <Col xl={1} md={0} lg={0} sm={0}></Col>

             </Row>
             <Row>
                 
                 <Col lg={4} sm={9} xs={9} className="mx-auto my-auto mt-5 pt-5">
                    <ListGroup>
                    <h4 className='width1'>Explore the best professional Templates</h4>
                    <div className="width2" style={{textAlign:'center'}}> Discover 1000+ templates in each design filed which are designed by the best designers, guided by the experts in each profession. No need of searching your marble in thousands of marbles, we have provided detailed categories in each filed. 
                    </div>
                    </ListGroup>
                 </Col>
                 <Col lg={5} sm={9} xs={9} className=" mt-5 mx-auto my-auto pt-5 pb-5">
                    <Image  src='./images/V2.png' fluid/>
                 </Col>
                 <Col xl={1} md={0} lg={0} sm={0}></Col>

             </Row>
             <Row>
                 <Col lg={5} sm={9} xs={9} className=" mt-5 mx-auto my-auto pt-5 pb-5">
                    <Image  src='./images/V3.png' fluid/>
                 </Col>
                 <Col lg={4} sm={9} xs={9} className="mx-auto my-auto mt-5 pt-5">
                    <ListGroup>
                    <h4 className='width1'>Simple but powerful workspace </h4>
                    <div className="width2" style={{textAlign:'center'}}> completely user friendly and simple workspace, no need of prior knowledge to design. You can also start from the scratch  </div>
                    </ListGroup>
                 </Col>
                 <Col xl={1} md={0} lg={0} sm={0}></Col>

             </Row>
      </div>
      
    )
}

export default Review
