import React from 'react'
import { useNavigate } from 'react-router-dom'

const PayNow = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <div className="card">
        <div className="card-header">
          <tr className='d-flex justify-content-around py-2'>
            <td>Item Name</td>
            <td>Price</td>
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
      <button className="btn btn-lg btn-secondary" onClick={()=>  navigate('/purchase')}>Pay</button>  
       <button className="btn btn-lg btn-transparent" onClick={()=> navigate('/')}>Cancel Payment</button>
      </div>
    </>
    
  )
}

export default PayNow
