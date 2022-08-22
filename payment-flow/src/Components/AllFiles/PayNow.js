import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from './image/Vector.jpg'

const PayNow = ({data}) => {
  const navigate = useNavigate()
  
  return (
    <>
      <div className="card">
        <div className="card-head py-3">
          <tr className='d-flex justify-content-around py-2'>
            <td>Item Name</td>
            <div className="d-flex gap-2">
              <img src={img} alt="Naira Symbol" />
              <td>Price</td>
            </div>
            
          </tr>
        </div>
        <div className="card-body">
          <tr className='d-flex justify-content-around py-2'>
            <td>Data science and usability</td>
            <td>50,000.00</td>
          </tr>
          {/*  */}
          <tr className='d-flex justify-content-around py-2'>
            <td>Shipping</td>
            <td>0.00</td>
          </tr>
          <hr className='mb-5'/>
          <tr className='d-flex justify-content-around container py-1  border mb-5'>
            <td className='text-muted'>Total</td>
            <td>50,000.00</td>
          </tr>
        </div>
      </div>
      <div className="d-flex my-4 gap-5">
      <button className="btn btn-lg btn-made text-white" onClick={()=> navigate('/purchase')}>Pay</button>  
       <button className="btn btn-lg btn-outline" onClick={()=> navigate('/')}>Cancel Payment</button>
      </div>
    </>
    
  )
}

export default PayNow
