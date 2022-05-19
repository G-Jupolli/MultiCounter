import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider/StateProvider';

import './Counter.css';

const Counter = ({ title, id, count }) => {
    const [countNum, setCountNum] = useState(count)
    const [{}, dispatch] = useStateValue();

    const addToCount = () => {
        setCountNum(countNum + 1)
    }

    const minusToCount = () => {
        setCountNum(countNum - 1)
    }

    const removeCounter = () => {
        dispatch({
            type: 'REMOVE_COUNTER',
            payload: id,
        })
    }

  return (
    <div className='counter'>
        <div className='counter__title'>
            <h3>{title}</h3>
            <button onClick={removeCounter}>Remove</button>
        </div>
        <div className='counter__countContainer'>
            <button onClick={addToCount} ><strong>+</strong></button>
            <p>{countNum}</p>
            <button onClick={minusToCount} ><strong>-</strong></button>
        </div>
    </div>
  )
}

export default Counter