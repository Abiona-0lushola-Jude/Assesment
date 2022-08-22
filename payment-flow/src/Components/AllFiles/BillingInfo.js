import React from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'

const BillingInfo = () => {
  const navigate = useNavigate()

  return (
    <Form>
      <label htmlFor="cardName" className="form-label my-3">Name on Card</label>
      <input 
      type="text" 
      name="cardName" 
      id="cardName" 
      className="form-control mb-5"
      required={true}
      placeholder='Opara Linus Ahmed' 
      />
      {/* card type */}
      <label htmlFor="cardType" className="form-label my-3">Card Type</label>
      <select 
      name="cardType" id="cardType" className="form-select mb-5">
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="verve">Verve</option>
      </select>
      <div className="container-fluid ps-0 pe-0">
        <div className="row">
          <div className="col-7 ">
              <label htmlFor="cardDetails" className="form-label my-3">Card Details</label>
              <input 
              type="text" 
              name="cardDetails" 
              id="cardDetails" 
              className="form-control mb-5" 
              required={true}
              placeholder='44960 44960 44960 44960'
              />
          </div>
          <div className="col-3 ">
            <label htmlFor="expiryDate" className="form-label my-3">Expiry Date</label>
            <input 
            type="text" 
            name="expiryDate" 
            id="expiryDate" 
            className="form-control mb-5" 
            required={true}
            placeholder='04 / 23'
            />
          </div>
          <div className="col-2 ">
            <label htmlFor="cvv" className="form-label my-3">CVV</label>
              <input 
              type="text" 
              name="cvv" 
              id="cvv" 
              className="form-control mb-5" 
              required={true}
              placeholder='923'
              />
          </div>
        </div>
      </div>

      <div className="d-flex my-4 gap-5">
      <button className="btn btn-lg btn-made text-white" onClick={()=>  navigate('/confirm')}>Next</button>  
       <button className="btn btn-lg btn-outline" onClick={()=> navigate('/')}>Cancel Payment</button>
      </div> 
    </Form>
  )
}

export default BillingInfo
