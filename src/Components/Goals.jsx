import React from 'react'
import { Arrow } from './Iconsvg'

const Goals = () => {
  return (
 <>
   <section className='goalsbgimg'>
    <div className='d-flex align-items-center justify-content-center gap-5 pt-90 flex-wrap'>
<p className='fs-40 fw-300 ff-maison text-white'>Ready to hit your goals?</p>
<div className='d-flex btnbook cursor_point'>
    <p className='fs-15 fw-600 ff-maison text-black'>Book a Strategy Call</p>
    <Arrow/>
</div>
    </div>
   </section>
 </>
  )
}

export default Goals