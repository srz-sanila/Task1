import React from 'react'
import './styleComponents/ExchangeTable.css'

const ExchangeTable = () => {
    return (
        <div className='tContainer'>
            <div className='tTitle'>
                <div><h2>Recently Modified Exchanges</h2></div>
                <div className='hUnderline'></div>
            </div>
            <div className='tTable'>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">EXCHANGE NUMBER</th>
                            <th scope="col">EXCHANGER</th>
                            <th scope="col">EXCHANGE TYPE</th>
                            <th scope="col">DAY IN EXCHANGE</th>
                            <th scope="col">LAST MILESTONE</th>
                            <th scope="col">FEES DUE</th>
                            <th scope="col">NO.OF PENDING TASK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>200001</td>
                            <td>
                                <div>Charles G.Knight
                                    <div>Springs Plaza, LLc</div>
                                </div>
                            </td>
                            <td>Delayed</td>
                            <td>34th</td>
                            <td>In identification period</td>
                            <td>$800</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>200002</td>
                            <td>
                                <div>Carl I.Jordan
                                    <div>1511 Prosperity, LLC</div>
                                </div>
                            </td>
                            <td>Delayed</td>
                            <td>35th</td>
                            <td>Identification Completed</td>
                            <td>$900</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>200003</td>
                            <td>
                                <div>Alfred E.Grant
                                    <div></div>
                                </div>

                            </td>
                            <td>Reverse</td>
                            <td>70th</td>
                            <td>In identification period</td>
                            <td>-</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>200004</td>
                            <td>
                                <div>Kevin B.McClain</div>
                                <div></div>

                            </td>
                            <td>Reverse</td>
                            <td>-</td>
                            <td>Exchange Closed</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>200005</td>
                            <td>
                                <div>Angelo m.Booker</div>
                                <div>GF Lex Trust, LLC</div>
                            </td>
                            <td>Delayed</td>
                            <td>170th</td>
                            <td>Exchange Created</td>
                            <td>$1500</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='tFooter'><h3>VIEW EXCHANGES</h3></div>
        </div >
    )
}

export default ExchangeTable
