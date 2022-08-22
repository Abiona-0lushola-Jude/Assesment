import React, { useState } from 'react'
import { Routes, Route,  } from 'react-router-dom'
import BillingInfo from './AllFiles/BillingInfo'
import PayNow from './AllFiles/PayNow'
import Personalnfo from './AllFiles/Personalnfo'
import PurchaseDone from './AllFiles/PurchaseDone'
import NavBar from './NavBar'


const Main = () => {

    const [showNav, setShowNav] = useState(true)
  return (
    <>
     <div className='page-container'>
        {showNav && <NavBar />}
        <Routes>
            <Route path='/' element={<Personalnfo  />}  />
            <Route path='/billing-info' element={<BillingInfo />} />
            <Route path='/confirm' element={<PayNow data={setShowNav} />} /> 
            <Route path='/purchase' exact element={<PurchaseDone data={setShowNav} />} />
        </Routes>
    </div>
    </>
   
  )
}

export default Main
