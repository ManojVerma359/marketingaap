import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import layer1 from '../assets/image/layer1.png'

const Start = () => {
  return (
    <>
    <section className='start_bgimg mt-120 position-relative'>
        <div>
            <img className='layer1 d-lg-block d-none' src={layer1} alt="#id" />
        </div>
        <Container>
<Row className='d-flex align-items-center justify-content-center pt-5 pb-5'>
    <Col lg={6} >
        <p className='fs-15 fw-400 ff-space text-black'>Get Your Custom Marketing Plan</p>
        <p className='fs-40 fw-300 ff-maison text-black pt-1 lheight45'>Start earning more money now</p>

    </Col>
    <Col lg={5} className='mt-lg-0 mt-3'>
<div className='enterinput d-flex align-items-center justify-content-between border-0'>
<input type="text" placeholder='Enter Your Website' className='fs-20 fw-400 ff-maison  enter_inpt ' />
<button className='fs-15 fw-600 ff-maison text-black bg-white border-0 p-3 rounded-5'>Submit</button>

    </div>  
      </Col>
</Row>

        </Container>

    </section>
    
    </>
  )
}

export default Start