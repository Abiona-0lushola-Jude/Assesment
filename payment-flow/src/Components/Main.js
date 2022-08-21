import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BillingInfo from './AllFiles/BillingInfo'
import ConfirmPayment from './AllFiles/ConfirmPayment'
import Personalnfo from './AllFiles/Personalnfo'
import NavBar from './NavBar'



const Main = () => {
  return (
    <div className='page-container'>
        <NavBar />
        <Routes>
            <Route path='/' element={<Personalnfo />}  />
            <Route path='/billing-info' element={<BillingInfo />} />
            <Route path='/confirm' element={<ConfirmPayment />} />
        </Routes>
    </div>
  )
}

export default Main
