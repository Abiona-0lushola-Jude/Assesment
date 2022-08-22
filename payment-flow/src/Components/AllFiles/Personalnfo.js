import React from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Personalnfo = () => {
    const navigate  = useNavigate()
  
  return (
    <Form>
      <label htmlFor="name" className='form-label my-3'>Name</label>
      <input 
      type="text" 
      className='form-control mb-4'
      name="name" 
      id="name" 
      placeholder='Name' 
      required={true}
      />
      {/* Email Details */}
      <label htmlFor="email" className='form-label my-3'>Email Address</label>
      <p>The Purchase receipt would be sent to the address</p>
      <input 
      type="email" 
      className='form-control mb-4'
      name="email" 
      id="email" 
      required={true} 
      placeholder='OparaLinusAhmed@devmail.com'
      />
      {/*  Address One*/}
      <label htmlFor="addressOne" className='form-label my-3'>Address 1</label>
      <input 
      type="text" 
      className='form-control mb-4'
      name="addressOne" 
      id="addressOne" 
      placeholder='Enter Your First chioce of Address here'
      />
      {/* AddressTwo */}
      <label htmlFor="addressTwo" className='form-label my-3'>Address 2</label>
      <input 
      type="text" 
      className='form-control mb-4'
      name="addressTwo" 
      id="addressTwo" 
      placeholder='Enter Your Second chioce of Address here'
      />
      {/* Table for LGA and State */}
      <div className="local-state my-3  container-fluid ps-0 pe-0">
        <div className="row">
          <div className="col-8">
              {/* ASection for LGA */}
              <label htmlFor="lga" className='form-label'>Local Government</label>
              <input 
              type="text"
              className='form-control' 
              name="lga" 
              id="lga" 
              placeholder='eg. Surulere' 
              />
          </div>
          <div className="col">
              {/* state */}
              <label htmlFor="state" className='form-label'>State</label>
              <select name="state" id="state" className='form-select'>
                <option value="abia">	Abia State</option>
                <option value="adamawa">Adamawa State</option>
                <option value="abia">Akwa Ibom State</option>
                <option value="abia">Anambra State</option>
                <option value="abia">Bauchi State</option>
                <option value="abia">Bayelsa State</option>
                <option value="abia">Benue State</option>
                <option value="abia">Borno State</option>
                <option value="abia">Cross River State</option>
                <option value="abia">Delta State</option>
                <option value="abia">Ebonyi State</option>
                <option value="abia">Edo State</option>
              </select>
          </div>
        </div>
      </div>
      <div className="d-flex my-5 gap-5">
      <button className="btn btn-lg btn-made text-white" onClick={()=>  navigate('/billing-info')}>Next</button>  
       <button className="btn btn-lg btn-outline" onClick={()=> navigate('/')}>Cancel Payment</button>
      </div> 
    </Form>
  )
}

export default Personalnfo
