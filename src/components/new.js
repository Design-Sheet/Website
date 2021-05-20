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
                    <h4 className='width1'>We provide product for </h4>
                    <div className="width2" style={{textAlign:'center'}}> All design fields namely:<br/>Architecture, Planning, Interior Design, Landscape,<br/> Graphic Design,and Product Design.</div>
                    </ListGroup>
                 </Col>
                 <Col xl={1} md={0} lg={0} sm={0}></Col>

             </Row>
             <Row>
                 
                 <Col lg={4} sm={9} xs={9} className="mx-auto my-auto mt-5 pt-5">
                    <ListGroup>
                    <h4 className='width1'>Choose from the best templates</h4>
                    <div className="width2" style={{textAlign:'center'}}>Discover 1000+ templates specific to each design field, designed by the the best and guided by the experts. No need to search for that one marble among thousands others, with customized search results to find the you the right fit. 
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
                    <div className="width2" style={{textAlign:'center'}}> User friendly, simple and intuitive workspace, with no prior knowledge needed to design. Either choose from the 1000+templates or start from scratch</div>
                    </ListGroup>
                 </Col>
                 <Col xl={1} md={0} lg={0} sm={0}></Col>

             </Row>
      </div>
      
    )
}

export default Review
