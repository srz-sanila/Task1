import React from 'react'
import MenuItem1 from './MenuItem1'
import MenuItem2 from './MenuItem2'
import MenuItem3 from './MenuItem3'
import './HeaderMenu.css'

const HeaderMenu = () => {
    return (
        <div className='mainContentDiv'>
            <MenuItem1 />
            <div className='sperator'>
            <MenuItem2 />
            <MenuItem3 />
            </div>
            
        </div>
    )
}

export default HeaderMenu
