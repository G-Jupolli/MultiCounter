import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider/StateProvider';
import { v4 as uuidv4 } from 'uuid';

import './Header.css';

const Header = () => {
    const [title, seTitle] = useState('');
    const [{}, dispatch] = useStateValue();

    const handlesubmit = (e) => {
        e.preventDefault();

        if (!title) {
            return;
        }

        dispatch({
            type: 'ADD_COUNTER',
            payload: {
                title: title,
                id: uuidv4(),
                count: 0,
            }
        })

    }

  return (
    <div className='header'>
        <div className='header__container'>
            <h3>Create Counter: </h3>
            <form className='header__form'>
                <input type='text' onChange={e => seTitle(e.target.value)} placeholder='title' />
                <button type='submit' onClick={handlesubmit}>+</button>
            </form>
        </div>

    </div>
  )
}

export default Header