import React from 'react'
import './styleComponents/EventList.css'

const EventList = () => {

    return (
        <div className='eContainer'>
            <div className='head'>
                <div><h2><b>Next 10 Events</b></h2></div>
                <div className='hUnderline'></div>
            </div>

            <div className='eList d-flex flex-column'>

                <div className='iEventContainer d-flex flex-row'>
                    <div className='E_date'>
                        <div className='bullet'></div>
                        <div>Sep</div>
                        <div className='date'>24</div>
                    </div>
                    <div className='E_details'>
                        <h2>45th Day falls on Oct 1, 2020 for Exchange 200007</h2>
                        
                            <ul>
                                <li>Exchanger: Spring Plaza, LLC</li>
                                <li>Name: Charles G. Knight</li>
                                <li>Email: charles@ypomail.com</li>
                            </ul>
                
                    </div>
                </div>

                <div className='iEventContainer d-flex flex-row'>
                    <div className='E_date'>
                        <div className='bullet'></div>
                        <div>Sep</div>
                        <div className='date'>30</div>
                    </div>
                    <div className='E_details'>
                        <h2>45th Day falls on Oct 1, 2020 for Exchange 200007</h2>
                        
                            <ul>
                                <li>Exchanger: Spring Plaza, LLC</li>
                                <li>Name: Charles G. Knight</li>
                                <li>Email: charles@ypomail.com</li>
                            </ul>
                
                    </div>
                </div>


                <div className='iEventContainer d-flex flex-row'>
                    <div className='E_date'>
                        <div className='bullet'></div>
                        <div>Oct</div>
                        <div className='date'>5</div>
                    </div>
                    <div className='E_details'>
                        <h2>45th Day falls on Oct 1, 2020 for Exchange 200007</h2>
                        
                            <ul>
                                <li>Exchanger: Spring Plaza, LLC</li>
                                <li>Name: Charles G. Knight</li>
                                <li>Email: charles@ypomail.com</li>
                            </ul>
                
                    </div>
                </div>

                <div className='iEventContainer d-flex flex-row'>
                    <div className='E_date'>
                        <div className='bullet'></div>
                        <div>Oct</div>
                        <div className='date'>15</div>
                    </div>
                    <div className='E_details'>
                        <h2>45th Day falls on Oct 1, 2020 for Exchange 200007</h2>
                        
                            <ul>
                                <li>Exchanger: Spring Plaza, LLC</li>
                                <li>Name: Charles G. Knight</li>
                                <li>Email: charles@ypomail.com</li>
                            </ul>
                
                    </div>
                </div>

                <div className='iEventContainer d-flex flex-row'>
                    <div className='E_date'>
                        <div className='bullet'></div>
                        <div>Oct</div>
                        <div className='date'>18</div>
                    </div>
                    <div className='E_details'>
                        <h2>45th Day falls on Oct 1, 2020 for Exchange 200007</h2>
                        
                            <ul>
                                <li>Exchanger: Spring Plaza, LLC</li>
                                <li>Name: Charles G. Knight</li>
                                <li>Email: charles@ypomail.com</li>
                            </ul>
                
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EventList
