import React from 'react'
import ExchangeTable from './ExchangeTable'
import EventList from './EventList';
import './styleComponents/ContentArea.css'
import Activities from './Activities';
import Sales from './Sales';
import HeaderMenu from './Header-Menu/HeaderMenu';

const ContentArea = () => {
    return (

        <div className='ContentContainer'>
            <HeaderMenu />

            <div className='ContentSection'>

                <div className='ContentSection1'>
                    <div className='rowElement'>
                        <div className='colm1'>
                            <ExchangeTable />
                        </div>

                        <div className='colm2'>
                            <EventList /> 
                        </div>
                    </div>
                </div>

                <div className='ContentSection2'>
                    <div className='rowElement'>
                        <div className='colm1'>
                            <Activities />
                        </div>

                        <div className='colm2'>
                            <Sales />
                        </div>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default ContentArea
