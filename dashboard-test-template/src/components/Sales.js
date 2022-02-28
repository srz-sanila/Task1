import React from 'react'
import './styleComponents/Sales.css'

const Sales = () => {
    return (
        <div className='sContainer'>
            <div className='head'>
                <div><h2><b>Top Sales Representatives</b></h2></div>
                <div className='hUnderline'></div>
            </div>

            <div className='sTable'>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">REPRESENTATIVE</th>
                            <th scope="col">EXCHANGE VALUE</th>
                            <th scope="col">NO.OF EXCHANGES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bobby D.Brown</td>
                            <td><span className="badge badge-pill badge-light value">$10K</span></td>
                            <td><span className="badge badge-pill badge-light exchange-no">6</span></td>
                        </tr>
                        <tr>
                            <td>Scott P.Shipton</td>
                            <td><span className="badge badge-pill badge-light value">$8K</span></td>
                            <td><span className="badge badge-pill badge-light exchange-no">3</span></td>
                        </tr>
                        <tr>
                            <td>Robert C.Cornell</td>
                            <td><span className="badge badge-pill badge-light value">$6K</span></td>
                            <td><span className="badge badge-pill badge-light exchange-no">4</span></td>
                        </tr>
                        <tr>
                            <td>Jack B.Wager</td>
                            <td><span className="badge badge-pill badge-light value">$5K</span></td>
                            <td><span className="badge badge-pill badge-light exchange-no">2</span></td>
                        </tr>
                        <tr>
                            <td>Edward C.Petitt</td>
                            <td><span className="badge badge-pill badge-light value">$10K</span></td>
                            <td><span className="badge badge-pill badge-light exchange-no">6</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sales
