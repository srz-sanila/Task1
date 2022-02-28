import React from 'react'
import './MenuItem2.css'

const MenuItem2 = () => {
    return (
        <div className='bContainer'>
            <div className='balance'>
                <div><h3>Exchange Balance</h3></div>
                <div><h1>$15K</h1></div>
                <div><h2>VIEW TRANSACTIONS</h2></div>
            </div>

            <div className='listContainer'>
                <ul>
                    <li><p>Fund to forward</p></li>
                    <li><p>Fund Recieved</p></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuItem2
