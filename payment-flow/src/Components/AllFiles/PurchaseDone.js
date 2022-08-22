import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import tick from './image/noun_tick_953515 2.jpg'

const PurchaseDone = ({data}) => {

  const [show, setShow] = useState(data)

    const navigate = useNavigate()

    function handleClick(){
        navigate('/')
        setShow(prev=> !prev)
        window.location.reload()
    }

  return (
    <div className='purchase-container'>
        <div className="mark-img">
            <img src={tick} alt="mark tick" />
        </div>
      <h1>Purchase Complete</h1>
      <p>Please check your mail for details concerning this transactionm</p>
      <p onClick={handleClick} className='home'>Return Home</p>
    </div>
  )
}

export default PurchaseDone
