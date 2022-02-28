import React from 'react'
import './styleComponents/Header.css'

const Header = () => {
    return (
        
            <div className='Hcontainer'>
                <div className='HPattern'>
                    <div className='abc d-flex justify-content-between'>
                        <div className='topNavContent'>
                            <div className='heading'>
                                <h1>Dashboard</h1>
                            </div>
                            <div className='Underline'></div>
                        </div>

                        <div className='d-flex justify-content-end'>
                            <button type="button" className='btn btn-primary addbutton'>+ New Exchange</button>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Header
