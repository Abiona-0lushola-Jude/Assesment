import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BillingInfo from './AllFiles/BillingInfo'
import ConfirmPayment from './AllFiles/ConfirmPayment'
import PayNow from './AllFiles/PayNow'
import Personalnfo from './AllFiles/Personalnfo'
import PurchaseDone from './AllFiles/PurchaseDone'
import NavBar from './NavBar'


const Main = () => {
  return (
    <div className='page-container'>
        <NavBar />
        <Routes>
            <Route path='/' element={<Personalnfo  />}  />
            <Route path='/billing-info' element={<BillingInfo />} />
            <Route path='/billing-info/pay-now' element={<PayNow />} /> 
            <Route path='/confirm' element={<ConfirmPayment />} />
            <Route path='/purchase' element={<PurchaseDone />}/>
        </Routes>
    </div>
  )
}

export default Main
