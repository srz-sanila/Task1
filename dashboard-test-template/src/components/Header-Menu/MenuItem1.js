
import React from 'react'
import './MenuItem1.css'
import './flag.png'

const MenuItem1 = () => {
    return (
        <div className='pContainer'>
            <div className='pContainerTop'>
                <div className='pContainerTopLineIem1'>
                    <h2>Exchanges</h2>
                    <div className="NumericHeader1">57</div>
                </div>

                <div  className='pContainerTopLineIem2'>
                    <div className='item_Header'>Active</div>
                    <div className="NumericHeader2">23</div>
                </div>

                <div  className='pContainerTopLineIem3'>
                    <div className='item_Header'>New</div>
                    <div className="NumericHeader3">10</div>
                </div>

                <div>
                    <img src={require('./flag.png')} />
                </div>
            </div>

            <div>
                <div className="progress">
                    <div className="progress-bar bg-warning progressBar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

            <div className='pContainerBottom'>
                <div><h3>Active Exchanges</h3></div>
                <div>14</div>
                <div>9</div>
            </div>
        </div>
    )
}

export default MenuItem1
