import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../asset/Review.css'

const Review = () => {
  return (
    <Carousel className='carousel important_background1'>
      <Carousel.Item fluid>
        <p>What people say about us</p>
        <p>Student</p>
        <p>
          "Design Sheets is a great initiative, and would prove to be highly
          useful for various architecture students, firms and even beyond. The
          various templates they offer are simple yet apt for the job with
          multiple options. With an interface that is easy."
        </p>
        <p>
          <i>-Shrin Goyal , IIT Kharagpur</i>
        </p>
      </Carousel.Item>
      <Carousel.Item fluid>
        <p>What people say about us</p>
        <p>Architect</p>
        <p>
          "DesignSheets is a new and a one of it's kind platform to enhance and
          improve the architecture presentation skills. It's finely designed
          templets can help many students and professionals to upgrde their
          design presentation to a new level. The user friendly UI of the
          platform is quite swift to understand and reduces worktime."
          <br />
          "A must try platform for all Architects and upcoming architects"
        </p>
        <p>
          <i>-Athar</i>
        </p>
      </Carousel.Item>
      <Carousel.Item fluid>
        <p>What people say about us</p>
        <p>Student</p>
        <p>
          "I hope this is going to be a great tool, the features which are
          promised are really beneficial for us and the most important thing is
          that team can work together which is really great tool."
        </p>
        <p>
          <i>-Haveen Hrithik T L , IIT Kharagpur</i>
        </p>
      </Carousel.Item>
    </Carousel>
  )
}

export default Review
