import React from 'react'
import './MenuItem3.css'

import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import ArticleIcon from '@mui/icons-material/Article';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const MenuItem3 = () => {
    return (
        <div className='iContainer'>
            <div className='itemContainer'>
                <div className='d-flex justify-content-center iconContainer'><PersonAddAltRoundedIcon color='primary' fontSize='large'/></div>
                <div className='d-flex justify-content-center'><p>Add Exchanger</p></div>
            </div>

            <div className='itemContainer'>
                <div className='d-flex justify-content-center iconContainer'><ArticleIcon color='primary' fontSize='large'/></div>
                <div className='d-flex justify-content-center'><p>Generate Reports</p></div>
            </div>

            <div className='itemContainer'>
                <div className='d-flex justify-content-center iconContainer'><MonetizationOnIcon color='primary' fontSize='large'/></div>
                <div className='d-flex justify-content-center'><p>View Transaction</p></div>
            </div>

        </div>
    )
}

export default MenuItem3
